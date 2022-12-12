import {
    ServerUnaryCall,
    sendUnaryData,
    ServerErrorResponse,
} from "@grpc/grpc-js";
import { IKlausServer } from "../server/proto/klausapp_grpc_pb"
import {
    TimePeriod,
    OverallScore,
    CategoryScoreOverTimePeriod,
    TicketScoreOverTimePeriod,
    GetScoreChangePoPRequest,
    ScoreChangePoP
} from "../server/proto/klausapp_pb"
import Knex from 'Knex';
import { Model } from 'objection';
import { calculateWeightedScore, validateTimePeriod, errorHandler } from './utils';
import { CustomError } from './Error'

const knex = Knex({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './database.db',
    },
})

Model.knex(knex);

// TODO: add general error handler for all endpoints

export const KlausServer: IKlausServer = {
    async getOverallScore(
        call: ServerUnaryCall<TimePeriod, OverallScore>,
        callback: sendUnaryData<OverallScore>
    ) {
        try {
            const overallScore = new OverallScore();
            const [startDate, endDate] = validateTimePeriod(call.request);

            const dateDiff = endDate.getSeconds() - startDate.getSeconds();
            console.log(`Diff: ${dateDiff} | startDate: ${startDate.toDate()} | endDate: ${endDate.toDate()}`);

            const startTime: number = startDate.getSeconds();
            const endTime: number = endDate.getSeconds();

            const ratings = await knex.raw(
                'SELECT r.rating, c.weight, r.created_at\n' +
                ' FROM ratings as r' +
                ' LEFT JOIN rating_categories as c' +
                ' ON r.rating_category_id = c.id' +
                ` WHERE unixepoch(created_at) BETWEEN ${startTime} AND ${endTime}` +
                ' ORDER BY created_at DESC;'
            );

            console.log(`Row count: ${ratings.length} for ${startTime} AND ${endTime}`);

            const score = calculateWeightedScore(ratings)

            overallScore.setScore(score);

            callback(null, overallScore)
        } catch (err: any) {
            return errorHandler(err,callback);
        }
    },
    getCategoryScoreOverTimePeriod(
        call: ServerUnaryCall<TimePeriod, CategoryScoreOverTimePeriod>,
        callback: sendUnaryData<CategoryScoreOverTimePeriod>
    ) {
        console.log('getCategoryScoreOverTimePeriod: done');
    },
    getTicketScoreOverTimePeriod(
        call: ServerUnaryCall<TimePeriod, TicketScoreOverTimePeriod>,
        callback: sendUnaryData<TicketScoreOverTimePeriod>
    ) {
        console.log('getCategoryScoreOverTimePeriod: done');
    },
    getScoreChangePoP(
        call: ServerUnaryCall<GetScoreChangePoPRequest, TicketScoreOverTimePeriod>,
        callback: sendUnaryData<ScoreChangePoP>
    ) {
        console.log('getCategoryScoreOverTimePeriod: done');
    }
};