import { assert } from "chai";
import { getCategoryScore } from "../../src/endpoints/get-category-score";
import { ServerWritableStreamImpl } from "@grpc/grpc-js/build/src/server-call";
import { TimePeriod } from "../../proto/server/klausapp_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { ServerErrorResponse } from "@grpc/grpc-js";
import { CategoryScoreByInterval } from "../../proto/client/klausapp_pb";
import * as _ from "lodash";

describe("getCategoryScore", () => {
    it("should throw error if `endDate` is empty", async () => {
        let error: ServerErrorResponse;
        const response: Array<any> = [];

        const call = {
            // About 12 days
            request: new TimePeriod().setStartdate(
                new Timestamp().setSeconds(1571000000)
            ),
            write: (chunk: CategoryScoreByInterval) => {
                response.push(chunk.toObject());
            },
            destroy: (err: ServerErrorResponse) => {
                error = err;
            },
        } as ServerWritableStreamImpl<TimePeriod, CategoryScoreByInterval>;

        await getCategoryScore(call).then(() => {
            assert.equal(
                error.message,
                `Either 'startDate' or 'endDate' is empty`
            );
            assert.equal(error.code, 3);
        });
    });

    it("should throw error if `endDate` is not later than `startDate`", async () => {
        let error: ServerErrorResponse;
        const response: Array<any> = [];
        const call = {
            // About 12 days
            request: new TimePeriod()
                .setStartdate(new Timestamp().setSeconds(1575555555))
                .setEnddate(new Timestamp().setSeconds(1570000000)),
            write: (chunk: CategoryScoreByInterval) => {
                response.push(chunk.toObject());
            },
            destroy: (err: ServerErrorResponse) => {
                error = err;
            },
        } as ServerWritableStreamImpl<TimePeriod, CategoryScoreByInterval>;

        await getCategoryScore(call).then(() => {
            assert.equal(
                error.message,
                `'endDate' should be later than 'startDate'`
            );
            assert.equal(error.code, 3);
        });
    });

    it("interval should be week if period is longer than 30 days", async () => {
        let error: ServerErrorResponse;
        const response: Array<any> = [];
        const call = {
            request: new TimePeriod()
                // About 64 days
                .setStartdate(new Timestamp().setSeconds(1570000000))
                .setEnddate(new Timestamp().setSeconds(1575555555)),
            write: (chunk: CategoryScoreByInterval) => {
                response.push(chunk.toObject());
            },
            end: () => {},
            destroy: (err: ServerErrorResponse) => {
                error = err;
            },
        } as ServerWritableStreamImpl<TimePeriod, CategoryScoreByInterval>;

        await getCategoryScore(call).then(() => {
            assert.isUndefined(error);

            _.forEach(response[0].scorebyintervalList, (item) => {
                assert.isNumber(Number(item.interval));
            });
        });
    });

    it("interval should be days if period is less than 30 days", async () => {
        let error: ServerErrorResponse;
        const response: Array<any> = [];

        const call = {
            // About 12 days
            request: new TimePeriod()
                .setStartdate(new Timestamp().setSeconds(1571000000))
                .setEnddate(new Timestamp().setSeconds(1572000000)),
            write: (chunk: CategoryScoreByInterval) => {
                response.push(chunk.toObject());
            },
            end: () => {},
            destroy: (err: ServerErrorResponse) => {
                error = err;
            },
        } as ServerWritableStreamImpl<TimePeriod, CategoryScoreByInterval>;

        await getCategoryScore(call).then(() => {
            assert.isUndefined(error);

            _.forEach(response[0].scorebyintervalList, (item) => {
                assert.isNaN(Number(item.interval));
            });
        });
    });
});
