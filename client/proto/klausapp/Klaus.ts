// Original file: proto/klausapp.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CategoryScoreOverTimePeriod as _klausapp_CategoryScoreOverTimePeriod, CategoryScoreOverTimePeriod__Output as _klausapp_CategoryScoreOverTimePeriod__Output } from '../klausapp/CategoryScoreOverTimePeriod';
import type { GetScoreChangePoPRequest as _klausapp_GetScoreChangePoPRequest, GetScoreChangePoPRequest__Output as _klausapp_GetScoreChangePoPRequest__Output } from '../klausapp/GetScoreChangePoPRequest';
import type { OverallScore as _klausapp_OverallScore, OverallScore__Output as _klausapp_OverallScore__Output } from '../klausapp/OverallScore';
import type { ScoreChangePoP as _klausapp_ScoreChangePoP, ScoreChangePoP__Output as _klausapp_ScoreChangePoP__Output } from '../klausapp/ScoreChangePoP';
import type { TicketScoreOverTimePeriod as _klausapp_TicketScoreOverTimePeriod, TicketScoreOverTimePeriod__Output as _klausapp_TicketScoreOverTimePeriod__Output } from '../klausapp/TicketScoreOverTimePeriod';
import type { TimePeriod as _klausapp_TimePeriod, TimePeriod__Output as _klausapp_TimePeriod__Output } from '../klausapp/TimePeriod';

export interface KlausClient extends grpc.Client {
  getCategoryScoreOverTimePeriod(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_CategoryScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  getCategoryScoreOverTimePeriod(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, callback: grpc.requestCallback<_klausapp_CategoryScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  getCategoryScoreOverTimePeriod(argument: _klausapp_TimePeriod, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_CategoryScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  getCategoryScoreOverTimePeriod(argument: _klausapp_TimePeriod, callback: grpc.requestCallback<_klausapp_CategoryScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  getCategoryScoreOverTimePeriod(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_CategoryScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  getCategoryScoreOverTimePeriod(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, callback: grpc.requestCallback<_klausapp_CategoryScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  getCategoryScoreOverTimePeriod(argument: _klausapp_TimePeriod, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_CategoryScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  getCategoryScoreOverTimePeriod(argument: _klausapp_TimePeriod, callback: grpc.requestCallback<_klausapp_CategoryScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  
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
  
  getTicketScoreOverTimePeriod(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_TicketScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  getTicketScoreOverTimePeriod(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, callback: grpc.requestCallback<_klausapp_TicketScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  getTicketScoreOverTimePeriod(argument: _klausapp_TimePeriod, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_TicketScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  getTicketScoreOverTimePeriod(argument: _klausapp_TimePeriod, callback: grpc.requestCallback<_klausapp_TicketScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  getTicketScoreOverTimePeriod(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_TicketScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  getTicketScoreOverTimePeriod(argument: _klausapp_TimePeriod, metadata: grpc.Metadata, callback: grpc.requestCallback<_klausapp_TicketScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  getTicketScoreOverTimePeriod(argument: _klausapp_TimePeriod, options: grpc.CallOptions, callback: grpc.requestCallback<_klausapp_TicketScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  getTicketScoreOverTimePeriod(argument: _klausapp_TimePeriod, callback: grpc.requestCallback<_klausapp_TicketScoreOverTimePeriod__Output>): grpc.ClientUnaryCall;
  
}

export interface KlausHandlers extends grpc.UntypedServiceImplementation {
  getCategoryScoreOverTimePeriod: grpc.handleUnaryCall<_klausapp_TimePeriod__Output, _klausapp_CategoryScoreOverTimePeriod>;
  
  getOverallScore: grpc.handleUnaryCall<_klausapp_TimePeriod__Output, _klausapp_OverallScore>;
  
  getScoreChangePoP: grpc.handleUnaryCall<_klausapp_GetScoreChangePoPRequest__Output, _klausapp_ScoreChangePoP>;
  
  getTicketScoreOverTimePeriod: grpc.handleUnaryCall<_klausapp_TimePeriod__Output, _klausapp_TicketScoreOverTimePeriod>;
  
}

export interface KlausDefinition extends grpc.ServiceDefinition {
  getCategoryScoreOverTimePeriod: MethodDefinition<_klausapp_TimePeriod, _klausapp_CategoryScoreOverTimePeriod, _klausapp_TimePeriod__Output, _klausapp_CategoryScoreOverTimePeriod__Output>
  getOverallScore: MethodDefinition<_klausapp_TimePeriod, _klausapp_OverallScore, _klausapp_TimePeriod__Output, _klausapp_OverallScore__Output>
  getScoreChangePoP: MethodDefinition<_klausapp_GetScoreChangePoPRequest, _klausapp_ScoreChangePoP, _klausapp_GetScoreChangePoPRequest__Output, _klausapp_ScoreChangePoP__Output>
  getTicketScoreOverTimePeriod: MethodDefinition<_klausapp_TimePeriod, _klausapp_TicketScoreOverTimePeriod, _klausapp_TimePeriod__Output, _klausapp_TicketScoreOverTimePeriod__Output>
}
