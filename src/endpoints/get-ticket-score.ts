import { ServerWritableStream } from "@grpc/grpc-js";
import {
    TicketScoreByCategory,
    TimePeriod,
} from "../../proto/server/klausapp_pb";
import { mapErrorToResponse, validateTimePeriod } from "../utils";
import _ from "lodash";
import { Db } from "../db";
import CategoryScore = TicketScoreByCategory.CategoryScore;

const db: Db = Db.getSingleton();

type NestedGroupedRatings = {
    [ticketId: string]: {
        [categoryId: string]: Array<any>;
    };
};

export async function getTicketScore(
    call: ServerWritableStream<TimePeriod, TicketScoreByCategory>
) {
    try {
        const [startDate, endDate] = validateTimePeriod(call.request);

        const startTime: number = startDate.getSeconds();
        const endTime: number = endDate.getSeconds();

        const ratingRows = await db.getRatingsWithCategoriesAndTickets(
            startTime,
            endTime
        );

        const tickets = (ratingRows as Array<any>).reduce(
            (aggregator: NestedGroupedRatings, row) => {
                if (_.has(aggregator, row.ticket_id)) {
                    if (_.has(aggregator[row.ticket_id], row.category_id)) {
                        aggregator[row.ticket_id][row.category_id].push(row);
                    } else {
                        aggregator[row.ticket_id][row.category_id] = [row];
                    }
                } else {
                    aggregator[row.ticket_id] = {
                        [row.category_id]: [row],
                    };
                }

                return aggregator;
            },
            {} as NestedGroupedRatings
        );

        _.forEach(tickets, (ratingsByCategory, key) => {
            const categoryScores: Array<CategoryScore> = [];

            _.forEach(ratingsByCategory, (ratings) => {
                const categoryScore: CategoryScore = new CategoryScore();

                const name = ratings[0].name;
                const score =
                    (_.sumBy(ratings, "rating") / ratings.length) * 20;

                categoryScore.setName(name);
                categoryScore.setScore(score);

                categoryScores.push(categoryScore);
            });

            const ticketScoreByCategory: TicketScoreByCategory =
                new TicketScoreByCategory();
            ticketScoreByCategory.setTicketid(Number(key));
            ticketScoreByCategory.setCategoryscoresList(categoryScores);

            call.write(ticketScoreByCategory);
        });

        call.end();
    } catch (err: any) {
        call.destroy(mapErrorToResponse(err));
    }
}
