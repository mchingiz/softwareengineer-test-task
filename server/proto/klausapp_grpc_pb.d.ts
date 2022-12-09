// package: klausapp
// file: klausapp.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as klausapp_pb from "./klausapp_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IKlausService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getCategoryScoreOverTimePeriod: IKlausService_IgetCategoryScoreOverTimePeriod;
    getTicketScoreOverTimePeriod: IKlausService_IgetTicketScoreOverTimePeriod;
    getOverallScore: IKlausService_IgetOverallScore;
    getScoreChangePoP: IKlausService_IgetScoreChangePoP;
}

interface IKlausService_IgetCategoryScoreOverTimePeriod extends grpc.MethodDefinition<klausapp_pb.TimePeriod, klausapp_pb.CategoryScoreOverTimePeriod> {
    path: "/klausapp.Klaus/getCategoryScoreOverTimePeriod";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<klausapp_pb.TimePeriod>;
    requestDeserialize: grpc.deserialize<klausapp_pb.TimePeriod>;
    responseSerialize: grpc.serialize<klausapp_pb.CategoryScoreOverTimePeriod>;
    responseDeserialize: grpc.deserialize<klausapp_pb.CategoryScoreOverTimePeriod>;
}
interface IKlausService_IgetTicketScoreOverTimePeriod extends grpc.MethodDefinition<klausapp_pb.TimePeriod, klausapp_pb.TicketScoreOverTimePeriod> {
    path: "/klausapp.Klaus/getTicketScoreOverTimePeriod";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<klausapp_pb.TimePeriod>;
    requestDeserialize: grpc.deserialize<klausapp_pb.TimePeriod>;
    responseSerialize: grpc.serialize<klausapp_pb.TicketScoreOverTimePeriod>;
    responseDeserialize: grpc.deserialize<klausapp_pb.TicketScoreOverTimePeriod>;
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
    getCategoryScoreOverTimePeriod: grpc.handleUnaryCall<klausapp_pb.TimePeriod, klausapp_pb.CategoryScoreOverTimePeriod>;
    getTicketScoreOverTimePeriod: grpc.handleUnaryCall<klausapp_pb.TimePeriod, klausapp_pb.TicketScoreOverTimePeriod>;
    getOverallScore: grpc.handleUnaryCall<klausapp_pb.TimePeriod, klausapp_pb.OverallScore>;
    getScoreChangePoP: grpc.handleUnaryCall<klausapp_pb.GetScoreChangePoPRequest, klausapp_pb.ScoreChangePoP>;
}

export interface IKlausClient {
    getCategoryScoreOverTimePeriod(request: klausapp_pb.TimePeriod, callback: (error: grpc.ServiceError | null, response: klausapp_pb.CategoryScoreOverTimePeriod) => void): grpc.ClientUnaryCall;
    getCategoryScoreOverTimePeriod(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: klausapp_pb.CategoryScoreOverTimePeriod) => void): grpc.ClientUnaryCall;
    getCategoryScoreOverTimePeriod(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: klausapp_pb.CategoryScoreOverTimePeriod) => void): grpc.ClientUnaryCall;
    getTicketScoreOverTimePeriod(request: klausapp_pb.TimePeriod, callback: (error: grpc.ServiceError | null, response: klausapp_pb.TicketScoreOverTimePeriod) => void): grpc.ClientUnaryCall;
    getTicketScoreOverTimePeriod(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: klausapp_pb.TicketScoreOverTimePeriod) => void): grpc.ClientUnaryCall;
    getTicketScoreOverTimePeriod(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: klausapp_pb.TicketScoreOverTimePeriod) => void): grpc.ClientUnaryCall;
    getOverallScore(request: klausapp_pb.TimePeriod, callback: (error: grpc.ServiceError | null, response: klausapp_pb.OverallScore) => void): grpc.ClientUnaryCall;
    getOverallScore(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: klausapp_pb.OverallScore) => void): grpc.ClientUnaryCall;
    getOverallScore(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: klausapp_pb.OverallScore) => void): grpc.ClientUnaryCall;
    getScoreChangePoP(request: klausapp_pb.GetScoreChangePoPRequest, callback: (error: grpc.ServiceError | null, response: klausapp_pb.ScoreChangePoP) => void): grpc.ClientUnaryCall;
    getScoreChangePoP(request: klausapp_pb.GetScoreChangePoPRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: klausapp_pb.ScoreChangePoP) => void): grpc.ClientUnaryCall;
    getScoreChangePoP(request: klausapp_pb.GetScoreChangePoPRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: klausapp_pb.ScoreChangePoP) => void): grpc.ClientUnaryCall;
}

export class KlausClient extends grpc.Client implements IKlausClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getCategoryScoreOverTimePeriod(request: klausapp_pb.TimePeriod, callback: (error: grpc.ServiceError | null, response: klausapp_pb.CategoryScoreOverTimePeriod) => void): grpc.ClientUnaryCall;
    public getCategoryScoreOverTimePeriod(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: klausapp_pb.CategoryScoreOverTimePeriod) => void): grpc.ClientUnaryCall;
    public getCategoryScoreOverTimePeriod(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: klausapp_pb.CategoryScoreOverTimePeriod) => void): grpc.ClientUnaryCall;
    public getTicketScoreOverTimePeriod(request: klausapp_pb.TimePeriod, callback: (error: grpc.ServiceError | null, response: klausapp_pb.TicketScoreOverTimePeriod) => void): grpc.ClientUnaryCall;
    public getTicketScoreOverTimePeriod(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: klausapp_pb.TicketScoreOverTimePeriod) => void): grpc.ClientUnaryCall;
    public getTicketScoreOverTimePeriod(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: klausapp_pb.TicketScoreOverTimePeriod) => void): grpc.ClientUnaryCall;
    public getOverallScore(request: klausapp_pb.TimePeriod, callback: (error: grpc.ServiceError | null, response: klausapp_pb.OverallScore) => void): grpc.ClientUnaryCall;
    public getOverallScore(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: klausapp_pb.OverallScore) => void): grpc.ClientUnaryCall;
    public getOverallScore(request: klausapp_pb.TimePeriod, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: klausapp_pb.OverallScore) => void): grpc.ClientUnaryCall;
    public getScoreChangePoP(request: klausapp_pb.GetScoreChangePoPRequest, callback: (error: grpc.ServiceError | null, response: klausapp_pb.ScoreChangePoP) => void): grpc.ClientUnaryCall;
    public getScoreChangePoP(request: klausapp_pb.GetScoreChangePoPRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: klausapp_pb.ScoreChangePoP) => void): grpc.ClientUnaryCall;
    public getScoreChangePoP(request: klausapp_pb.GetScoreChangePoPRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: klausapp_pb.ScoreChangePoP) => void): grpc.ClientUnaryCall;
}
