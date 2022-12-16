import { assert } from "chai";
import { ServerUnaryCallImpl } from "@grpc/grpc-js/build/src/server-call";
import {
    GetScoreChangePoPRequest,
    ScoreChangePoP,
    TimePeriod,
} from "../../proto/server/klausapp_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { sendUnaryData, ServerErrorResponse } from "@grpc/grpc-js";
import { getScoreChangePoP } from "../../src/endpoints/get-score-change-pop";
import * as _ from "lodash";

describe("getScoreChangePoP", () => {
    it("fails if startDate is empty", async () => {
        const firstTimeperiod = new TimePeriod().setEnddate(
            new Timestamp().setSeconds(1575555555)
        );
        const secondTimeperiod = new TimePeriod().setStartdate(
            new Timestamp().setSeconds(1570000000)
        );

        const call = {
            request: new GetScoreChangePoPRequest()
                .setFirstperiod(firstTimeperiod)
                .setSecondperiod(secondTimeperiod),
        } as ServerUnaryCallImpl<GetScoreChangePoPRequest, ScoreChangePoP>;

        let error: ServerErrorResponse;

        await getScoreChangePoP(call, ((err: ServerErrorResponse) => {
            error = err;
        }) as sendUnaryData<ScoreChangePoP>).then(() => {
            assert.equal(
                error.message,
                `Either 'startDate' or 'endDate' is empty`
            );
            assert.equal(error.code, 3);
        });
    });

    it("fails if endDate is not later than startDate", async () => {
        const firstTimeperiod = new TimePeriod()
            .setStartdate(new Timestamp().setSeconds(1571111111))
            .setEnddate(new Timestamp().setSeconds(1572222222));
        const secondTimeperiod = new TimePeriod()
            .setStartdate(new Timestamp().setSeconds(1575555555))
            .setEnddate(new Timestamp().setSeconds(1574444444));

        const call = {
            request: new GetScoreChangePoPRequest()
                .setFirstperiod(firstTimeperiod)
                .setSecondperiod(secondTimeperiod),
        } as ServerUnaryCallImpl<GetScoreChangePoPRequest, ScoreChangePoP>;

        let error: ServerErrorResponse;

        await getScoreChangePoP(call, ((err: ServerErrorResponse) => {
            error = err;
        }) as sendUnaryData<ScoreChangePoP>).then(() => {
            assert.equal(
                error.message,
                `'endDate' should be later than 'startDate'`
            );
            assert.equal(error.code, 3);
        });
    });

    it("returns correct score change", async () => {
        const firstTimeperiod = new TimePeriod()
            .setStartdate(new Timestamp().setSeconds(1571111111))
            .setEnddate(new Timestamp().setSeconds(1572222222));
        const secondTimeperiod = new TimePeriod()
            .setStartdate(new Timestamp().setSeconds(1574444444))
            .setEnddate(new Timestamp().setSeconds(1575555555));

        const call = {
            request: new GetScoreChangePoPRequest()
                .setFirstperiod(firstTimeperiod)
                .setSecondperiod(secondTimeperiod),
        } as ServerUnaryCallImpl<GetScoreChangePoPRequest, ScoreChangePoP>;

        let error: ServerErrorResponse;
        let response: ScoreChangePoP;

        await getScoreChangePoP(call, ((
            err: ServerErrorResponse,
            res: ScoreChangePoP
        ) => {
            error = err;
            response = res;
        }) as sendUnaryData<ScoreChangePoP>).then(() => {
            const score = (response as ScoreChangePoP).getScorechange();
            assert.isNull(error);
            assert.equal(_.round(score, 3), 2.128);
        });
    });
});
