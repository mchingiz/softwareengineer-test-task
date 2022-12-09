import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class TimePeriod extends jspb.Message {
  getStartdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartdate(value?: google_protobuf_timestamp_pb.Timestamp): TimePeriod;
  hasStartdate(): boolean;
  clearStartdate(): TimePeriod;

  getEnddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnddate(value?: google_protobuf_timestamp_pb.Timestamp): TimePeriod;
  hasEnddate(): boolean;
  clearEnddate(): TimePeriod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimePeriod.AsObject;
  static toObject(includeInstance: boolean, msg: TimePeriod): TimePeriod.AsObject;
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

export class Category extends jspb.Message {
  getId(): number;
  setId(value: number): Category;

  getName(): string;
  setName(value: string): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class Ticket extends jspb.Message {
  getId(): number;
  setId(value: number): Ticket;

  getName(): string;
  setName(value: string): Ticket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ticket.AsObject;
  static toObject(includeInstance: boolean, msg: Ticket): Ticket.AsObject;
  static serializeBinaryToWriter(message: Ticket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ticket;
  static deserializeBinaryFromReader(message: Ticket, reader: jspb.BinaryReader): Ticket;
}

export namespace Ticket {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class DateScore extends jspb.Message {
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): DateScore;
  hasDate(): boolean;
  clearDate(): DateScore;

  getScore(): number;
  setScore(value: number): DateScore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateScore.AsObject;
  static toObject(includeInstance: boolean, msg: DateScore): DateScore.AsObject;
  static serializeBinaryToWriter(message: DateScore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateScore;
  static deserializeBinaryFromReader(message: DateScore, reader: jspb.BinaryReader): DateScore;
}

export namespace DateScore {
  export type AsObject = {
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    score: number,
  }
}

export class CategoryScore extends jspb.Message {
  getCategory(): Category | undefined;
  setCategory(value?: Category): CategoryScore;
  hasCategory(): boolean;
  clearCategory(): CategoryScore;

  getScore(): number;
  setScore(value: number): CategoryScore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryScore.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryScore): CategoryScore.AsObject;
  static serializeBinaryToWriter(message: CategoryScore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryScore;
  static deserializeBinaryFromReader(message: CategoryScore, reader: jspb.BinaryReader): CategoryScore;
}

export namespace CategoryScore {
  export type AsObject = {
    category?: Category.AsObject,
    score: number,
  }
}

export class CategoryScoreOverTimePeriod extends jspb.Message {
  getCategory(): Category | undefined;
  setCategory(value?: Category): CategoryScoreOverTimePeriod;
  hasCategory(): boolean;
  clearCategory(): CategoryScoreOverTimePeriod;

  getRatingcount(): number;
  setRatingcount(value: number): CategoryScoreOverTimePeriod;

  getScorebydateList(): Array<DateScore>;
  setScorebydateList(value: Array<DateScore>): CategoryScoreOverTimePeriod;
  clearScorebydateList(): CategoryScoreOverTimePeriod;
  addScorebydate(value?: DateScore, index?: number): DateScore;

  getOverallscore(): number;
  setOverallscore(value: number): CategoryScoreOverTimePeriod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryScoreOverTimePeriod.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryScoreOverTimePeriod): CategoryScoreOverTimePeriod.AsObject;
  static serializeBinaryToWriter(message: CategoryScoreOverTimePeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryScoreOverTimePeriod;
  static deserializeBinaryFromReader(message: CategoryScoreOverTimePeriod, reader: jspb.BinaryReader): CategoryScoreOverTimePeriod;
}

export namespace CategoryScoreOverTimePeriod {
  export type AsObject = {
    category?: Category.AsObject,
    ratingcount: number,
    scorebydateList: Array<DateScore.AsObject>,
    overallscore: number,
  }
}

export class TicketScoreOverTimePeriod extends jspb.Message {
  getTicket(): Ticket | undefined;
  setTicket(value?: Ticket): TicketScoreOverTimePeriod;
  hasTicket(): boolean;
  clearTicket(): TicketScoreOverTimePeriod;

  getScorebycategoriesList(): Array<CategoryScore>;
  setScorebycategoriesList(value: Array<CategoryScore>): TicketScoreOverTimePeriod;
  clearScorebycategoriesList(): TicketScoreOverTimePeriod;
  addScorebycategories(value?: CategoryScore, index?: number): CategoryScore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketScoreOverTimePeriod.AsObject;
  static toObject(includeInstance: boolean, msg: TicketScoreOverTimePeriod): TicketScoreOverTimePeriod.AsObject;
  static serializeBinaryToWriter(message: TicketScoreOverTimePeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketScoreOverTimePeriod;
  static deserializeBinaryFromReader(message: TicketScoreOverTimePeriod, reader: jspb.BinaryReader): TicketScoreOverTimePeriod;
}

export namespace TicketScoreOverTimePeriod {
  export type AsObject = {
    ticket?: Ticket.AsObject,
    scorebycategoriesList: Array<CategoryScore.AsObject>,
  }
}

export class GetScoreChangePoPRequest extends jspb.Message {
  getFirstperiod(): TimePeriod | undefined;
  setFirstperiod(value?: TimePeriod): GetScoreChangePoPRequest;
  hasFirstperiod(): boolean;
  clearFirstperiod(): GetScoreChangePoPRequest;

  getSecondperiod(): TimePeriod | undefined;
  setSecondperiod(value?: TimePeriod): GetScoreChangePoPRequest;
  hasSecondperiod(): boolean;
  clearSecondperiod(): GetScoreChangePoPRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScoreChangePoPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScoreChangePoPRequest): GetScoreChangePoPRequest.AsObject;
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

export class OverallScore extends jspb.Message {
  getScore(): number;
  setScore(value: number): OverallScore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OverallScore.AsObject;
  static toObject(includeInstance: boolean, msg: OverallScore): OverallScore.AsObject;
  static serializeBinaryToWriter(message: OverallScore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OverallScore;
  static deserializeBinaryFromReader(message: OverallScore, reader: jspb.BinaryReader): OverallScore;
}

export namespace OverallScore {
  export type AsObject = {
    score: number,
  }
}

export class ScoreChangePoP extends jspb.Message {
  getScorechange(): number;
  setScorechange(value: number): ScoreChangePoP;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScoreChangePoP.AsObject;
  static toObject(includeInstance: boolean, msg: ScoreChangePoP): ScoreChangePoP.AsObject;
  static serializeBinaryToWriter(message: ScoreChangePoP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScoreChangePoP;
  static deserializeBinaryFromReader(message: ScoreChangePoP, reader: jspb.BinaryReader): ScoreChangePoP;
}

export namespace ScoreChangePoP {
  export type AsObject = {
    scorechange: number,
  }
}

