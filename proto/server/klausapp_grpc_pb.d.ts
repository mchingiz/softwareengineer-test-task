// package: klausapp
// file: klausapp.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as klausapp_pb from "./klausapp_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IKlausService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getCategoryScore: IKlausService_IgetCategoryScore;
    getTicketScore: IKlausService_IgetTicketScore;
    getOverallScore: IKlausService_IgetOverallScore;
    getScoreChangePoP: IKlausService_IgetScoreChangePoP;
}

interface IKlausService_IgetCategoryScore extends grpc.MethodDefinition<klausapp_pb.TimePeriod, klausapp_pb.CategoryScoreByInterval> {
    path: "/klausapp.Klaus/getCategoryScore";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<klausapp_pb.TimePeriod>;
    requestDeserialize: grpc.deserialize<klausapp_pb.TimePeriod>;
    responseSerialize: grpc.serialize<klausapp_pb.CategoryScoreByInterval>;
    responseDeserialize: grpc.deserialize<klausapp_pb.CategoryScoreByInterval>;
}
interface IKlausService_IgetTicketScore extends grpc.MethodDefinition<klausapp_pb.TimePeriod, klausapp_pb.TicketScoreByCategory> {
    path: "/klausapp.Klaus/getTicketScore";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<klausapp_pb.TimePeriod>;
    requestDeserialize: grpc.deserialize<klausapp_pb.TimePeriod>;
    responseSerialize: grpc.serialize<klausapp_pb.TicketScoreByCategory>;
    responseDeserialize: grpc.deserialize<klausapp_pb.TicketScoreByCategory>;
}
interface IKlausService_IgetOverallScore extends grpc.MethodDefinition<klausapp_pb.TimePeriod, klausapp_pb.OverallScore> {
    path: "/klausapp.Klaus/getOverallScore";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<klausapp_pb.TimePeriod>;
    requestDeserialize: grpc.deserialize<klausapp_pb.TimePeriod>;
    responseSerialize: grpc.serialize<klausapp_pb.OverallScore>;
    responseDeserialize: grpc.deserialize<klausapp_pb.OverallScore>;
}
interface IKlausService_IgetScoreChangePoP extends grpc.MethodDefinition<klausapp_pb.GetScoreChangePoPRequest, klausapp_pb.ScoreChangePoP> {
    path: "/klausapp.Klaus/getScoreChangePoP";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<klausapp_pb.GetScoreChangePoPRequest>;
    requestDeserialize: grpc.deserialize<klausapp_pb.GetScoreChangePoPRequest>;
    responseSerialize: grpc.serialize<klausapp_pb.ScoreChangePoP>;
    responseDeserialize: grpc.deserialize<klausapp_pb.ScoreChangePoP>;
}

export const KlausService: IKlausService;

export interface IKlausServer extends grpc.UntypedServiceImplementation {
    getCategoryScore: grpc.handleServerStreamingCall<klausapp_pb.TimePeriod, klausapp_pb.CategoryScoreByInterval>;
    getTicketScore: grpc.handleServerStreamingCall<klausapp_pb.TimePeriod, klausapp_pb.TicketScoreByCategory>;
    getOverallScore: grpc.handleUnaryCall<klausapp_pb.TimePeriod, klausapp_pb.OverallScore>;
    getScoreChangePoP: grpc.handleUnaryCall<klausapp_pb.GetScoreChangePoPRequest, klausapp_pb.ScoreChangePoP>;
}

export interface IKlausClient {
    getCategoryScore(request: klausapp_pb.TimePeriod, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<klausapp_pb.CategoryScoreByInterval>;
    getCategoryScore(request: klausapp_pb.TimePeriod, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<klausapp_pb.CategoryScoreByInterval>;
    getTicketScore(request: klausapp_pb.TimePeriod, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<klausapp_pb.TicketScoreByCategory>;
    getTicketScore(request: klausapp_pb.TimePeriod, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<klausapp_pb.TicketScoreByCategory>;
    getOverallScore(request: klausapp_pb.TimePeriod, callback: (error: grpc.ServiceError | null, response: klausapp_pb.OverallScore) => void): grpc.ClientUnaryCall;
    getOverallScore(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: klausapp_pb.OverallScore) => void): grpc.ClientUnaryCall;
    getOverallScore(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: klausapp_pb.OverallScore) => void): grpc.ClientUnaryCall;
    getScoreChangePoP(request: klausapp_pb.GetScoreChangePoPRequest, callback: (error: grpc.ServiceError | null, response: klausapp_pb.ScoreChangePoP) => void): grpc.ClientUnaryCall;
    getScoreChangePoP(request: klausapp_pb.GetScoreChangePoPRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: klausapp_pb.ScoreChangePoP) => void): grpc.ClientUnaryCall;
    getScoreChangePoP(request: klausapp_pb.GetScoreChangePoPRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: klausapp_pb.ScoreChangePoP) => void): grpc.ClientUnaryCall;
}

export class KlausClient extends grpc.Client implements IKlausClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getCategoryScore(request: klausapp_pb.TimePeriod, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<klausapp_pb.CategoryScoreByInterval>;
    public getCategoryScore(request: klausapp_pb.TimePeriod, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<klausapp_pb.CategoryScoreByInterval>;
    public getTicketScore(request: klausapp_pb.TimePeriod, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<klausapp_pb.TicketScoreByCategory>;
    public getTicketScore(request: klausapp_pb.TimePeriod, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<klausapp_pb.TicketScoreByCategory>;
    public getOverallScore(request: klausapp_pb.TimePeriod, callback: (error: grpc.ServiceError | null, response: klausapp_pb.OverallScore) => void): grpc.ClientUnaryCall;
    public getOverallScore(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: klausapp_pb.OverallScore) => void): grpc.ClientUnaryCall;
    public getOverallScore(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: klausapp_pb.OverallScore) => void): grpc.ClientUnaryCall;
    public getScoreChangePoP(request: klausapp_pb.GetScoreChangePoPRequest, callback: (error: grpc.ServiceError | null, response: klausapp_pb.ScoreChangePoP) => void): grpc.ClientUnaryCall;
    public getScoreChangePoP(request: klausapp_pb.GetScoreChangePoPRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: klausapp_pb.ScoreChangePoP) => void): grpc.ClientUnaryCall;
    public getScoreChangePoP(request: klausapp_pb.GetScoreChangePoPRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: klausapp_pb.ScoreChangePoP) => void): grpc.ClientUnaryCall;
}
