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
import { Db } from "../db";

const db: Db = Db.getSingleton();

export async function getScoreChangePoP(
    call: ServerUnaryCall<GetScoreChangePoPRequest, ScoreChangePoP>,
    callback: sendUnaryData<ScoreChangePoP>
) {
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
}