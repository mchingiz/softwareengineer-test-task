import { assert } from "chai";
import { getOverallScore } from "../../src/endpoints/get-overall-score";
import { ServerUnaryCallImpl } from "@grpc/grpc-js/build/src/server-call";
import { OverallScore, TimePeriod } from "../../proto/server/klausapp_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { sendUnaryData, ServerErrorResponse } from "@grpc/grpc-js";

describe("getOverallScore", () => {
    it("fails if startDate is empty", async () => {
        const call = {
            request: new TimePeriod().setEnddate(
                new Timestamp().setSeconds(1575555555)
            ),
        } as ServerUnaryCallImpl<TimePeriod, OverallScore>;

        let error: ServerErrorResponse;

        await getOverallScore(call, ((err: ServerErrorResponse) => {
            error = err;
        }) as sendUnaryData<any>).then(() => {
            assert.equal(
                error.message,
                `Either 'startDate' or 'endDate' is empty`
            );
            assert.equal(error.code, 3);
        });
    });

    it("fails if endDate is empty", async () => {
        const call = {
            request: new TimePeriod().setStartdate(
                new Timestamp().setSeconds(1575555555)
            ),
        } as ServerUnaryCallImpl<TimePeriod, OverallScore>;

        let error: ServerErrorResponse;

        await getOverallScore(call, ((err: ServerErrorResponse) => {
            error = err;
        }) as sendUnaryData<any>).then(() => {
            assert.equal(
                error.message,
                `Either 'startDate' or 'endDate' is empty`
            );
            assert.equal(error.code, 3);
        });
    });

    it("fails if endDate is not later than startDate", async () => {
        const call = {
            request: new TimePeriod()
                .setStartdate(new Timestamp().setSeconds(1575555555))
                .setEnddate(new Timestamp().setSeconds(1570000000)),
        } as ServerUnaryCallImpl<TimePeriod, OverallScore>;

        let error: ServerErrorResponse;

        await getOverallScore(call, ((err: ServerErrorResponse) => {
            error = err;
        }) as sendUnaryData<any>).then(() => {
            assert.equal(
                error.message,
                `'endDate' should be later than 'startDate'`
            );
            assert.equal(error.code, 3);
        });
    });

    it("returns 48", async () => {
        const timeperiod = new TimePeriod()
            .setStartdate(new Timestamp().setSeconds(1570000000))
            .setEnddate(new Timestamp().setSeconds(1575000000));

        const call = {
            request: timeperiod,
        } as ServerUnaryCallImpl<TimePeriod, OverallScore>;

        let error: ServerErrorResponse;
        let response: OverallScore;

        await getOverallScore(call, ((
            err: ServerErrorResponse,
            res: OverallScore
        ) => {
            error = err;
            response = res;
        }) as sendUnaryData<OverallScore>).then(() => {
            assert.isNull(error);
            assert.isNotNull(response);
            assert.equal(response.toObject().score, 48);
        });
    });
});
