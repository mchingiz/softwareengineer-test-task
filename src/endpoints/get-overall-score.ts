import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { OverallScore, TimePeriod } from "../../proto/server/klausapp_pb";
import {
    calculateWeightedScore,
    mapErrorToResponse,
    validateTimePeriod,
} from "../utils";
import { Db } from "./../db";

const db: Db = Db.getSingleton();

export async function getOverallScore(
    call: ServerUnaryCall<TimePeriod, OverallScore>,
    callback: sendUnaryData<OverallScore>
) {
    try {
        const overallScore = new OverallScore();
        const [startDate, endDate] = validateTimePeriod(call.request);

        const startTime: number = startDate.getSeconds();
        const endTime: number = endDate.getSeconds();

        const ratingRows = await db.getRatingsWithCategories(
            startTime,
            endTime
        );

        const score = calculateWeightedScore(ratingRows);

        overallScore.setScore(score);

        return callback(null, overallScore);
    } catch (err: any) {
        callback(mapErrorToResponse(err), null);
    }
}
