// Original file: proto/klausapp.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CategoryScoreByInterval as _klausapp_CategoryScoreByInterval, CategoryScoreByInterval__Output as _klausapp_CategoryScoreByInterval__Output } from '../klausapp/CategoryScoreByInterval';
import type { GetScoreChangePoPRequest as _klausapp_GetScoreChangePoPRequest, GetScoreChangePoPRequest__Output as _klausapp_GetScoreChangePoPRequest__Output } from '../klausapp/GetScoreChangePoPRequest';
import type { OverallScore as _klausapp_OverallScore, OverallScore__Output as _klausapp_OverallScore__Output } from '../klausapp/OverallScore';
import type { ScoreChangePoP as _klausapp_ScoreChangePoP, ScoreChangePoP__Output as _klausapp_ScoreChangePoP__Output } from '../klausapp/ScoreChangePoP';
import type { TicketScoreByCategory as _klausapp_TicketScoreByCategory, TicketScoreByCategory__Output as _klausapp_TicketScoreByCategory__Output } from '../klausapp/TicketScoreByCategory';
import type { TimePeriod as _klausapp_TimePeriod, TimePeriod__Output as _klausapp_TimePeriod__Output } from '../klausapp/TimePeriod';

export interface KlausClient extends grpc.Client {
  getCategoryScore(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_klausapp_CategoryScoreByInterval__Output>;
  getCategoryScore(argument: _klausapp_TimePeriod, options?: grpc.CallOptions): grpc.ClientReadableStream<_klausapp_CategoryScoreByInterval__Output>;
  getCategoryScore(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_klausapp_CategoryScoreByInterval__Output>;
  getCategoryScore(argument: _klausapp_TimePeriod, options?: grpc.CallOptions): grpc.ClientReadableStream<_klausapp_CategoryScoreByInterval__Output>;
  
  getOverallScore(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_OverallScore__Output>): grpc.ClientUnaryCall;
  getOverallScore(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, callback: grpc.requestCallback<_klausapp_OverallScore__Output>): grpc.ClientUnaryCall;
  getOverallScore(argument: _klausapp_TimePeriod, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_OverallScore__Output>): grpc.ClientUnaryCall;
  getOverallScore(argument: _klausapp_TimePeriod, callback: grpc.requestCallback<_klausapp_OverallScore__Output>): grpc.ClientUnaryCall;
  getOverallScore(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_OverallScore__Output>): grpc.ClientUnaryCall;
  getOverallScore(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, callback: grpc.requestCallback<_klausapp_OverallScore__Output>): grpc.ClientUnaryCall;
  getOverallScore(argument: _klausapp_TimePeriod, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_OverallScore__Output>): grpc.ClientUnaryCall;
  getOverallScore(argument: _klausapp_TimePeriod, callback: grpc.requestCallback<_klausapp_OverallScore__Output>): grpc.ClientUnaryCall;
  
  getScoreChangePoP(argument: _klausapp_GetScoreChangePoPRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_ScoreChangePoP__Output>): grpc.ClientUnaryCall;
  getScoreChangePoP(argument: _klausapp_GetScoreChangePoPRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_klausapp_ScoreChangePoP__Output>): grpc.ClientUnaryCall;
  getScoreChangePoP(argument: _klausapp_GetScoreChangePoPRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_ScoreChangePoP__Output>): grpc.ClientUnaryCall;
  getScoreChangePoP(argument: _klausapp_GetScoreChangePoPRequest, callback: grpc.requestCallback<_klausapp_ScoreChangePoP__Output>): grpc.ClientUnaryCall;
  getScoreChangePoP(argument: _klausapp_GetScoreChangePoPRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_ScoreChangePoP__Output>): grpc.ClientUnaryCall;
  getScoreChangePoP(argument: _klausapp_GetScoreChangePoPRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_klausapp_ScoreChangePoP__Output>): grpc.ClientUnaryCall;
  getScoreChangePoP(argument: _klausapp_GetScoreChangePoPRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_ScoreChangePoP__Output>): grpc.ClientUnaryCall;
  getScoreChangePoP(argument: _klausapp_GetScoreChangePoPRequest, callback: grpc.requestCallback<_klausapp_ScoreChangePoP__Output>): grpc.ClientUnaryCall;
  
  getTicketScore(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_klausapp_TicketScoreByCategory__Output>;
  getTicketScore(argument: _klausapp_TimePeriod, options?: grpc.CallOptions): grpc.ClientReadableStream<_klausapp_TicketScoreByCategory__Output>;
  getTicketScore(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_klausapp_TicketScoreByCategory__Output>;
  getTicketScore(argument: _klausapp_TimePeriod, options?: grpc.CallOptions): grpc.ClientReadableStream<_klausapp_TicketScoreByCategory__Output>;
  
}

export interface KlausHandlers extends grpc.UntypedServiceImplementation {
  getCategoryScore: grpc.handleServerStreamingCall<_klausapp_TimePeriod__Output, _klausapp_CategoryScoreByInterval>;
  
  getOverallScore: grpc.handleUnaryCall<_klausapp_TimePeriod__Output, _klausapp_OverallScore>;
  
  getScoreChangePoP: grpc.handleUnaryCall<_klausapp_GetScoreChangePoPRequest__Output, _klausapp_ScoreChangePoP>;
  
  getTicketScore: grpc.handleServerStreamingCall<_klausapp_TimePeriod__Output, _klausapp_TicketScoreByCategory>;
  
}

export interface KlausDefinition extends grpc.ServiceDefinition {
  getCategoryScore: MethodDefinition<_klausapp_TimePeriod, _klausapp_CategoryScoreByInterval, _klausapp_TimePeriod__Output, _klausapp_CategoryScoreByInterval__Output>
  getOverallScore: MethodDefinition<_klausapp_TimePeriod, _klausapp_OverallScore, _klausapp_TimePeriod__Output, _klausapp_OverallScore__Output>
  getScoreChangePoP: MethodDefinition<_klausapp_GetScoreChangePoPRequest, _klausapp_ScoreChangePoP, _klausapp_GetScoreChangePoPRequest__Output, _klausapp_ScoreChangePoP__Output>
  getTicketScore: MethodDefinition<_klausapp_TimePeriod, _klausapp_TicketScoreByCategory, _klausapp_TimePeriod__Output, _klausapp_TicketScoreByCategory__Output>
}
