/**
 * @fileoverview gRPC-Web generated client stub for klausapp
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: klausapp.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as klausapp_pb from './klausapp_pb';


export class KlausClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorgetCategoryScore = new grpcWeb.MethodDescriptor(
    '/klausapp.Klaus/getCategoryScore',
    grpcWeb.MethodType.SERVER_STREAMING,
    klausapp_pb.TimePeriod,
    klausapp_pb.CategoryScoreByInterval,
    (request: klausapp_pb.TimePeriod) => {
      return request.serializeBinary();
    },
    klausapp_pb.CategoryScoreByInterval.deserializeBinary
  );

  getCategoryScore(
    request: klausapp_pb.TimePeriod,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<klausapp_pb.CategoryScoreByInterval> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/klausapp.Klaus/getCategoryScore',
      request,
      metadata || {},
      this.methodDescriptorgetCategoryScore);
  }

  methodDescriptorgetTicketScore = new grpcWeb.MethodDescriptor(
    '/klausapp.Klaus/getTicketScore',
    grpcWeb.MethodType.SERVER_STREAMING,
    klausapp_pb.TimePeriod,
    klausapp_pb.TicketScoreByCategory,
    (request: klausapp_pb.TimePeriod) => {
      return request.serializeBinary();
    },
    klausapp_pb.TicketScoreByCategory.deserializeBinary
  );

  getTicketScore(
    request: klausapp_pb.TimePeriod,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<klausapp_pb.TicketScoreByCategory> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/klausapp.Klaus/getTicketScore',
      request,
      metadata || {},
      this.methodDescriptorgetTicketScore);
  }

  methodDescriptorgetOverallScore = new grpcWeb.MethodDescriptor(
    '/klausapp.Klaus/getOverallScore',
    grpcWeb.MethodType.UNARY,
    klausapp_pb.TimePeriod,
    klausapp_pb.OverallScore,
    (request: klausapp_pb.TimePeriod) => {
      return request.serializeBinary();
    },
    klausapp_pb.OverallScore.deserializeBinary
  );

  getOverallScore(
    request: klausapp_pb.TimePeriod,
    metadata: grpcWeb.Metadata | null): Promise<klausapp_pb.OverallScore>;

  getOverallScore(
    request: klausapp_pb.TimePeriod,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: klausapp_pb.OverallScore) => void): grpcWeb.ClientReadableStream<klausapp_pb.OverallScore>;

  getOverallScore(
    request: klausapp_pb.TimePeriod,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: klausapp_pb.OverallScore) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/klausapp.Klaus/getOverallScore',
        request,
        metadata || {},
        this.methodDescriptorgetOverallScore,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/klausapp.Klaus/getOverallScore',
    request,
    metadata || {},
    this.methodDescriptorgetOverallScore);
  }

  methodDescriptorgetScoreChangePoP = new grpcWeb.MethodDescriptor(
    '/klausapp.Klaus/getScoreChangePoP',
    grpcWeb.MethodType.UNARY,
    klausapp_pb.GetScoreChangePoPRequest,
    klausapp_pb.ScoreChangePoP,
    (request: klausapp_pb.GetScoreChangePoPRequest) => {
      return request.serializeBinary();
    },
    klausapp_pb.ScoreChangePoP.deserializeBinary
  );

  getScoreChangePoP(
    request: klausapp_pb.GetScoreChangePoPRequest,
    metadata: grpcWeb.Metadata | null): Promise<klausapp_pb.ScoreChangePoP>;

  getScoreChangePoP(
    request: klausapp_pb.GetScoreChangePoPRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: klausapp_pb.ScoreChangePoP) => void): grpcWeb.ClientReadableStream<klausapp_pb.ScoreChangePoP>;

  getScoreChangePoP(
    request: klausapp_pb.GetScoreChangePoPRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: klausapp_pb.ScoreChangePoP) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/klausapp.Klaus/getScoreChangePoP',
        request,
        metadata || {},
        this.methodDescriptorgetScoreChangePoP,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/klausapp.Klaus/getScoreChangePoP',
    request,
    metadata || {},
    this.methodDescriptorgetScoreChangePoP);
  }

}

