import { assert } from 'chai';
import { validateTimePeriod } from '../src/utils';
import {TimePeriod} from "../server/proto/klausapp_pb";
import {Timestamp} from "google-protobuf/google/protobuf/timestamp_pb";

describe('validateTimePeriod', () => {
    it('Throw error if `timePeriod` is not supplied', () => {
        assert.throws(
            () => {
                // @ts-ignore
                validateTimePeriod(null)
            },
            `'timePeriod' is not supplied`
        );
    })

    it('Throw error if `startDate` is empty', () => {
        const timeperiod = new TimePeriod();
        timeperiod.setEnddate(new Timestamp().setSeconds(1570000000));

        assert.throws(
            () => {
                validateTimePeriod(timeperiod)
            },
            `Either 'startDate' or 'endDate' is empty`
        );
    })

    it('Throw error if `endDate` is empty', () => {
        const timeperiod = new TimePeriod();
        timeperiod.setStartdate(new Timestamp().setSeconds(1570000000));

        assert.throws(
            () => {
                validateTimePeriod(timeperiod)
            },
            `Either 'startDate' or 'endDate' is empty`
        );
    })

    it('Throw error if `endDate` is not later than `startDate', () => {
        const timeperiod = new TimePeriod();
        timeperiod.setStartdate(new Timestamp().setSeconds(1570000099));
        timeperiod.setEnddate(new Timestamp().setSeconds(1570000000));

        assert.throws(
            () => {
                validateTimePeriod(timeperiod)
            },
            `'endDate' should be later than 'startDate'`
        );
    })
})