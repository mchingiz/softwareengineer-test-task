import { ServerWritableStream } from "@grpc/grpc-js";
import {
    CategoryScoreByInterval,
    TimePeriod,
} from "../../proto/server/klausapp_pb";
import { mapErrorToResponse, validateTimePeriod } from "../utils";
import { Db, getDb } from "../db";
import _ from "lodash";
import IntervalScore = CategoryScoreByInterval.IntervalScore;
import { weekNumber } from "weeknumber";

const db: Db = getDb();
const ONE_DAY_IN_SECONDS = 24 * 60 * 60;

type NestedGroupedRatings = {
    [categoryId: string]: {
        name: string;
        ratingCount: number;
        ratingsByInterval: {
            [interval: string]: Array<any>;
        };
        ratingSum: number;
    };
};

export async function getCategoryScore(
    call: ServerWritableStream<TimePeriod, CategoryScoreByInterval>
) {
    console.log("getCategoryScore call received");

    try {
        const [startDate, endDate] = validateTimePeriod(call.request);

        const startTime: number = startDate.getSeconds();
        const endTime: number = endDate.getSeconds();

        const longerThanThirtyDays =
            endTime - startTime >= 30 * ONE_DAY_IN_SECONDS;

        const ratingRows = await db.getRatingsWithCategories(
            startTime,
            endTime
        );

        const categories = (ratingRows as Array<any>).reduce(
            (aggregator: NestedGroupedRatings, row) => {
                const categoryId = row.rating_category_id;
                const createdAt = new Date(row.created_at);
                const interval: string = longerThanThirtyDays
                    ? weekNumber(createdAt).toString() // week no
                    : createdAt.toLocaleDateString("en-EN"); // D/M/YY

                if (_.has(aggregator, categoryId)) {
                    if (!_.has(aggregator[categoryId], interval)) {
                        aggregator[categoryId]["ratingsByInterval"][interval] =
                            [];
                    }

                    aggregator[categoryId]["ratingsByInterval"][interval].push(
                        row
                    );
                    aggregator[categoryId].ratingCount++;
                    aggregator[categoryId].ratingSum += row.rating;
                } else {
                    aggregator[categoryId] = {
                        name: row.name,
                        ratingCount: 1,
                        ratingsByInterval: {
                            [interval]: [row],
                        },
                        ratingSum: row.rating,
                    };
                }

                return aggregator;
            },
            {} as NestedGroupedRatings
        );

        _.forEach(categories, (category, categoryId: string) => {
            const scoresByInterval: Array<IntervalScore> = [];

            _.forEach(
                category.ratingsByInterval,
                (ratings, interval: string) => {
                    const score =
                        (_.sumBy(ratings, "rating") / ratings.length) * 20;

                    const intervalScore = new IntervalScore();
                    intervalScore.setInterval(interval);
                    intervalScore.setScore(score);

                    scoresByInterval.push(intervalScore);
                }
            );

            const categoryScoreByInterval = new CategoryScoreByInterval();

            categoryScoreByInterval.setId(Number(categoryId));
            categoryScoreByInterval.setName(category.name);
            categoryScoreByInterval.setRatingcount(category.ratingCount);
            categoryScoreByInterval.setScorebyintervalList(scoresByInterval);
            categoryScoreByInterval.setOverallscore(
                (category.ratingSum / category.ratingCount) * 20
            );

            call.write(categoryScoreByInterval);
        });
    } catch (err: any) {
        call.destroy(mapErrorToResponse(err));
    }

    console.log("getCategoryScore done");
}
