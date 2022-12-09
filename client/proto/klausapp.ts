import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { KlausClient as _klausapp_KlausClient, KlausDefinition as _klausapp_KlausDefinition } from './klausapp/Klaus';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  klausapp: {
    Category: MessageTypeDefinition
    CategoryScore: MessageTypeDefinition
    CategoryScoreOverTimePeriod: MessageTypeDefinition
    DateScore: MessageTypeDefinition
    GetScoreChangePoPRequest: MessageTypeDefinition
    Klaus: SubtypeConstructor<typeof grpc.Client, _klausapp_KlausClient> & { service: _klausapp_KlausDefinition }
    OverallScore: MessageTypeDefinition
    ScoreChangePoP: MessageTypeDefinition
    Ticket: MessageTypeDefinition
    TicketScoreOverTimePeriod: MessageTypeDefinition
    TimePeriod: MessageTypeDefinition
  }
}

