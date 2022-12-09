import {
    ServerUnaryCall,
    sendUnaryData,
    ServerWritableStream,
    ServerReadableStream,
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

export const KlausServer: IKlausServer = {
    getOverallScore(
        call: ServerUnaryCall<TimePeriod, OverallScore>,
        callback: sendUnaryData<OverallScore>
    ) {
        const overallScore = new OverallScore();
        overallScore.setScore(12);

        console.log('getOverallScore: done');
        callback(null, overallScore)
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