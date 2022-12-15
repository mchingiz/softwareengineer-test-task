import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import {
    GetScoreChangePoPRequest,
    ScoreChangePoP,
} from "../../proto/server/klausapp_pb";
import {
    calculateWeightedScore,
    mapErrorToResponse,
    validateTimePeriod,
} from "../utils";
import { Db, getDb } from "../db";

const db: Db = getDb();

export async function getScoreChangePoP(
    call: ServerUnaryCall<GetScoreChangePoPRequest, ScoreChangePoP>,
    callback: sendUnaryData<ScoreChangePoP>
) {
    console.log("getScoreChangePoP call received");

    try {
        const scoreChangePoP = new ScoreChangePoP();

        const [firstPeriodStartDate, firstPeriodEndDate] = validateTimePeriod(
            call.request.getFirstperiod()
        );
        const [secondPeriodStartDate, secondPeriodEndDate] = validateTimePeriod(
            call.request.getSecondperiod()
        );

        const ratingsForFirstPeriod = await db.getRatingsWithCategories(
            firstPeriodStartDate.getSeconds(),
            firstPeriodEndDate.getSeconds()
        );
        const firstPeriodOverallScore = calculateWeightedScore(
            ratingsForFirstPeriod
        );

        const ratingsForSecondPeriod = await db.getRatingsWithCategories(
            secondPeriodStartDate.getSeconds(),
            secondPeriodEndDate.getSeconds()
        );
        const secondPeriodOverallScore = calculateWeightedScore(
            ratingsForSecondPeriod
        );

        const change =
            ((secondPeriodOverallScore - firstPeriodOverallScore) /
                firstPeriodOverallScore) *
            100;

        scoreChangePoP.setScorechange(change);

        callback(null, scoreChangePoP);
    } catch (err: any) {
        callback(mapErrorToResponse(err), null);
    }
    console.log("getScoreChangePoP done");
}
