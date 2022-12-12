import {sendUnaryData, ServerErrorResponse } from "@grpc/grpc-js";
import {CustomError} from "./Error";
import {TimePeriod} from "../server/proto/klausapp_pb";
import {Timestamp} from "google-protobuf/google/protobuf/timestamp_pb";

export function calculateWeightedScore(ratings: {rating: number, weight: number} []) : number {
    const aggregated = ratings.reduce(
        (aggregator, row) => {
            const score = 20 * row.rating * row.weight;

            return {
                totalWeight: aggregator.totalWeight + 100 * row.weight,
                totalScore: aggregator.totalScore + score,
            }
        },
        {
            totalWeight: 0,
            totalScore: 0,
        }
    )

    if (aggregated.totalScore === 0 || aggregated.totalWeight === 0) {
        return 0;
    }

    return Math.floor(aggregated.totalScore/aggregated.totalWeight * 100);
}

export function validateTimePeriod(timePeriod: TimePeriod) : Array<Timestamp> {
    const startDate: Timestamp | undefined = timePeriod.getStartdate();
    const endDate: Timestamp | undefined = timePeriod.getEnddate();

    if (startDate === undefined || endDate === undefined) {
        throw new CustomError(3, `Either 'startDate' or 'endDate' is empty`);
    }

    if (startDate.getSeconds() >= endDate.getSeconds()) {
        throw new CustomError(3, `'endDate' should be later than 'startDate'`);
    }

    return [startDate,endDate];
}

export function errorHandler(err: any, callback: sendUnaryData<any>) : void {
    let errorResponse: Partial<ServerErrorResponse>;

    if (err instanceof CustomError) {
        errorResponse = {
            message: err.message,
            code: err.code,
        }
    } else {
        errorResponse = {
            message: 'Something went wrong',
            code: 2,
        };
    }

    callback(errorResponse, null);
}