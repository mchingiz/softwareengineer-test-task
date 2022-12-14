// package: klausapp
// file: klausapp.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TimePeriod extends jspb.Message { 

    hasStartdate(): boolean;
    clearStartdate(): void;
    getStartdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartdate(value?: google_protobuf_timestamp_pb.Timestamp): TimePeriod;

    hasEnddate(): boolean;
    clearEnddate(): void;
    getEnddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnddate(value?: google_protobuf_timestamp_pb.Timestamp): TimePeriod;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimePeriod.AsObject;
    static toObject(includeInstance: boolean, msg: TimePeriod): TimePeriod.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimePeriod, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimePeriod;
    static deserializeBinaryFromReader(message: TimePeriod, reader: jspb.BinaryReader): TimePeriod;
}

export namespace TimePeriod {
    export type AsObject = {
        startdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        enddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CategoryScoreByInterval extends jspb.Message { 
    getId(): number;
    setId(value: number): CategoryScoreByInterval;
    getName(): string;
    setName(value: string): CategoryScoreByInterval;
    getRatingcount(): number;
    setRatingcount(value: number): CategoryScoreByInterval;
    clearScorebyintervalList(): void;
    getScorebyintervalList(): Array<CategoryScoreByInterval.IntervalScore>;
    setScorebyintervalList(value: Array<CategoryScoreByInterval.IntervalScore>): CategoryScoreByInterval;
    addScorebyinterval(value?: CategoryScoreByInterval.IntervalScore, index?: number): CategoryScoreByInterval.IntervalScore;
    getOverallscore(): number;
    setOverallscore(value: number): CategoryScoreByInterval;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoryScoreByInterval.AsObject;
    static toObject(includeInstance: boolean, msg: CategoryScoreByInterval): CategoryScoreByInterval.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategoryScoreByInterval, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoryScoreByInterval;
    static deserializeBinaryFromReader(message: CategoryScoreByInterval, reader: jspb.BinaryReader): CategoryScoreByInterval;
}

export namespace CategoryScoreByInterval {
    export type AsObject = {
        id: number,
        name: string,
        ratingcount: number,
        scorebyintervalList: Array<CategoryScoreByInterval.IntervalScore.AsObject>,
        overallscore: number,
    }


    export class IntervalScore extends jspb.Message { 
        getInterval(): string;
        setInterval(value: string): IntervalScore;
        getScore(): number;
        setScore(value: number): IntervalScore;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): IntervalScore.AsObject;
        static toObject(includeInstance: boolean, msg: IntervalScore): IntervalScore.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: IntervalScore, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): IntervalScore;
        static deserializeBinaryFromReader(message: IntervalScore, reader: jspb.BinaryReader): IntervalScore;
    }

    export namespace IntervalScore {
        export type AsObject = {
            interval: string,
            score: number,
        }
    }

}

export class TicketScoreByCategory extends jspb.Message { 
    getTicketid(): number;
    setTicketid(value: number): TicketScoreByCategory;
    clearCategoryscoresList(): void;
    getCategoryscoresList(): Array<TicketScoreByCategory.CategoryScore>;
    setCategoryscoresList(value: Array<TicketScoreByCategory.CategoryScore>): TicketScoreByCategory;
    addCategoryscores(value?: TicketScoreByCategory.CategoryScore, index?: number): TicketScoreByCategory.CategoryScore;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TicketScoreByCategory.AsObject;
    static toObject(includeInstance: boolean, msg: TicketScoreByCategory): TicketScoreByCategory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TicketScoreByCategory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TicketScoreByCategory;
    static deserializeBinaryFromReader(message: TicketScoreByCategory, reader: jspb.BinaryReader): TicketScoreByCategory;
}

export namespace TicketScoreByCategory {
    export type AsObject = {
        ticketid: number,
        categoryscoresList: Array<TicketScoreByCategory.CategoryScore.AsObject>,
    }


    export class CategoryScore extends jspb.Message { 
        getName(): string;
        setName(value: string): CategoryScore;
        getScore(): number;
        setScore(value: number): CategoryScore;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CategoryScore.AsObject;
        static toObject(includeInstance: boolean, msg: CategoryScore): CategoryScore.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CategoryScore, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CategoryScore;
        static deserializeBinaryFromReader(message: CategoryScore, reader: jspb.BinaryReader): CategoryScore;
    }

    export namespace CategoryScore {
        export type AsObject = {
            name: string,
            score: number,
        }
    }

}

export class OverallScore extends jspb.Message { 
    getScore(): number;
    setScore(value: number): OverallScore;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OverallScore.AsObject;
    static toObject(includeInstance: boolean, msg: OverallScore): OverallScore.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OverallScore, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OverallScore;
    static deserializeBinaryFromReader(message: OverallScore, reader: jspb.BinaryReader): OverallScore;
}

export namespace OverallScore {
    export type AsObject = {
        score: number,
    }
}

export class GetScoreChangePoPRequest extends jspb.Message { 

    hasFirstperiod(): boolean;
    clearFirstperiod(): void;
    getFirstperiod(): TimePeriod | undefined;
    setFirstperiod(value?: TimePeriod): GetScoreChangePoPRequest;

    hasSecondperiod(): boolean;
    clearSecondperiod(): void;
    getSecondperiod(): TimePeriod | undefined;
    setSecondperiod(value?: TimePeriod): GetScoreChangePoPRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetScoreChangePoPRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetScoreChangePoPRequest): GetScoreChangePoPRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetScoreChangePoPRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetScoreChangePoPRequest;
    static deserializeBinaryFromReader(message: GetScoreChangePoPRequest, reader: jspb.BinaryReader): GetScoreChangePoPRequest;
}

export namespace GetScoreChangePoPRequest {
    export type AsObject = {
        firstperiod?: TimePeriod.AsObject,
        secondperiod?: TimePeriod.AsObject,
    }
}

export class ScoreChangePoP extends jspb.Message { 
    getScorechange(): number;
    setScorechange(value: number): ScoreChangePoP;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScoreChangePoP.AsObject;
    static toObject(includeInstance: boolean, msg: ScoreChangePoP): ScoreChangePoP.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScoreChangePoP, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScoreChangePoP;
    static deserializeBinaryFromReader(message: ScoreChangePoP, reader: jspb.BinaryReader): ScoreChangePoP;
}

export namespace ScoreChangePoP {
    export type AsObject = {
        scorechange: number,
    }
}
