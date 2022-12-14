import {
    ServerUnaryCall,
    sendUnaryData,
    ServerErrorResponse, ServerWritableStream,
} from "@grpc/grpc-js";
import { IKlausServer } from "../server/proto/klausapp_grpc_pb"
import {
    TimePeriod,
    OverallScore,
    CategoryScoreOverTimePeriod,
    GetScoreChangePoPRequest,
    ScoreChangePoP,
    TicketScoreByCategory, CategoryScore,
} from "../server/proto/klausapp_pb"
import Knex from 'knex';
import { Model } from 'objection';
import {calculateWeightedScore, validateTimePeriod, getErrorResponse } from './utils';
import { CustomError } from './Error'
import _ from 'lodash';
import {Int32Value} from "google-protobuf/google/protobuf/wrappers_pb";
import {Empty} from "google-protobuf/google/protobuf/empty_pb";
import { getTicketScoreOverTimePeriod } from "./endpoints/get-ticket-score-over-time-period";
import { getOverallScore } from "./endpoints/get-overall-score";
import { getScoreChangePoP } from "./endpoints/get-score-change-pop";

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
    getOverallScore,
    getTicketScoreOverTimePeriod,
    getScoreChangePoP,
    async getCategoryScoreOverTimePeriod(
        call: ServerUnaryCall<TimePeriod, CategoryScoreOverTimePeriod>,
        callback: sendUnaryData<CategoryScoreOverTimePeriod>
    ) {
        console.log('getCategoryScoreOverTimePeriod: done');
    },

};