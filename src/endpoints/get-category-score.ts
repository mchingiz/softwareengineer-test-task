import {ServerWritableStream} from "@grpc/grpc-js";
import {
    CategoryScoreByInterval,
    TimePeriod
} from "../../server/proto/klausapp_pb";
import {mapErrorToResponse, validateTimePeriod} from "../utils";
import {Db, getDb} from "../db";
import _ from "lodash";
import IntervalScore = CategoryScoreByInterval.IntervalScore;

const db: Db = getDb();

type NestedGroupedRatings = {
    [categoryId: string]: {
        name: string,
        ratingCount: number,
        ratingsByInterval: {
            [interval: string]: Array<any>
        }
    };
}

export async function getCategoryScore(
    call: ServerWritableStream<TimePeriod, CategoryScoreByInterval>,
) {
    try {
        const [startDate, endDate] = validateTimePeriod(call.request);

        const startTime: number = startDate.getSeconds();
        const endTime: number = endDate.getSeconds();

        const ratingRows = await db.getRatingsWithCategories(startTime, endTime);

        const categories = (ratingRows as Array<any>).reduce(
            (aggregator: NestedGroupedRatings, row) => {
                const categoryId = row.rating_category_id;
                const interval: string = new Date(row.created_at).toLocaleDateString('en-EN');

                if (aggregator.hasOwnProperty(categoryId)) {
                    if (aggregator[categoryId].hasOwnProperty(interval)) {
                        aggregator[categoryId]['ratingsByInterval'][interval].push(row);
                    } else {
                        aggregator[categoryId]['ratingsByInterval'][interval] = [row];
                    }
                } else {
                    aggregator[categoryId] = {
                        name: row.name,
                        ratingCount: 1,
                        ratingsByInterval: {
                            [interval]: [row]
                        }
                    }
                }

                return aggregator;
            },
            {} as NestedGroupedRatings,
        );


        _.forEach(categories, (category, categoryId: string) => {
            const categoryScoreByInterval = new CategoryScoreByInterval();
            const scoresByInterval: Array<IntervalScore> = [];

            categoryScoreByInterval.setId(Number(categoryId));
            categoryScoreByInterval.setName(category.name);
            categoryScoreByInterval.setRatingcount(category.ratingCount);

            _.forEach(category.ratingsByInterval, (ratings, interval:string) => {
                const score = _.sumBy(ratings, 'rating') / ratings.length * 20;

                const intervalScore = new IntervalScore();
                intervalScore.setInterval(interval);
                intervalScore.setScore(score);

                scoresByInterval.push(intervalScore);
            });

            categoryScoreByInterval.setScorebyintervalList(scoresByInterval);

            call.write(categoryScoreByInterval);
        })
    } catch (err: any) {
        call.destroy(mapErrorToResponse(err));
    }
    console.log('getCategoryScoreOverTimePeriod: done');
}