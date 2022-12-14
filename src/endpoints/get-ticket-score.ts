import { ServerWritableStream } from "@grpc/grpc-js";
import {
  TicketScoreByCategory,
  TimePeriod,
} from "../../server/proto/klausapp_pb";
import { mapErrorToResponse, validateTimePeriod } from "../utils";
import _ from "lodash";
import { Db, getDb } from "../db";
import CategoryScore = TicketScoreByCategory.CategoryScore;

const db: Db = getDb();

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

    // TODO: make a separate function for nested group bys
    const ratingsByTicket = (ratingRows as Array<any>).reduce(
      (aggregator, row) => {
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
      {}
    );

    _.forEach(ratingsByTicket, (ratingsByCategory, key) => {
      const ticketScoreByCategory: TicketScoreByCategory =
        new TicketScoreByCategory();
      ticketScoreByCategory.setTicketid(Number(key));
      const categoryScores: Array<CategoryScore> = [];

      _.forEach(ratingsByCategory, (ratings) => {
        const categoryScore: CategoryScore = new CategoryScore();

        const name = ratings[0].name;
        const score = (_.sumBy(ratings, "rating") / ratings.length) * 20;

        categoryScore.setName(name);
        categoryScore.setScore(score);

        categoryScores.push(categoryScore);
      });

      ticketScoreByCategory.setCategoryscoresList(categoryScores);

      call.write(ticketScoreByCategory);
    });

    call.end();
  } catch (err: any) {
    call.destroy(mapErrorToResponse(err));
  }
}
