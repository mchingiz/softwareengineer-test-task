import {sendUnaryData, ServerUnaryCall} from "@grpc/grpc-js";
import {GetScoreChangePoPRequest, ScoreChangePoP} from "../../server/proto/klausapp_pb";
import {calculateWeightedScore, getErrorResponse, validateTimePeriod} from "../utils";
import {Db, getDb} from "../db";

const db: Db = getDb();

export async function getScoreChangePoP(
    call: ServerUnaryCall<GetScoreChangePoPRequest, ScoreChangePoP>,
    callback: sendUnaryData<ScoreChangePoP>
) {
    try {
        const scoreChangePoP = new ScoreChangePoP();

        const [firstPeriodStartDate, firstPeriodEndDate] = validateTimePeriod(call.request.getFirstperiod());
        const [secondPeriodStartDate, secondPeriodEndDate] = validateTimePeriod(call.request.getSecondperiod());

        const ratingsForFirstPeriod = await db.getRatingsWithCategories(
            firstPeriodStartDate.getSeconds(),
            firstPeriodEndDate.getSeconds(),
        );
        const firstPeriodOverallScore = calculateWeightedScore(ratingsForFirstPeriod);

        const ratingsForSecondPeriod = await db.getRatingsWithCategories(
            secondPeriodStartDate.getSeconds(),
            secondPeriodEndDate.getSeconds(),
        );
        const secondPeriodOverallScore = calculateWeightedScore(ratingsForSecondPeriod);

        // TODO: make it float. Can be negative. Deal with it
        scoreChangePoP.setScorechange(firstPeriodOverallScore/secondPeriodOverallScore * 100);

        callback(null, scoreChangePoP);
    } catch (err: any) {
        callback(getErrorResponse(err), null);
    }
    console.log('getScoreChangePoP: done');
}