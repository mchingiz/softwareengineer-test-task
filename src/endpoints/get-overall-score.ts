import {sendUnaryData, ServerUnaryCall} from "@grpc/grpc-js";
import {OverallScore, TimePeriod} from "../../server/proto/klausapp_pb";
import {calculateWeightedScore, getErrorResponse, validateTimePeriod} from "../utils";
import { Db, getDb} from './../db';

const db: Db = getDb();

export async function getOverallScore(
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

        const ratings = await db.getRatingsWithCategories(startTime, endTime);

        console.log(`Row count: ${ratings.length} for ${startTime} AND ${endTime}`);

        const score = calculateWeightedScore(ratings)

        overallScore.setScore(score);

        callback(null, overallScore)
    } catch (err: any) {
        callback(getErrorResponse(err), null);
    }
}