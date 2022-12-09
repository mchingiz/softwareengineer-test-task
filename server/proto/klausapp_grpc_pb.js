// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var klausapp_pb = require('./klausapp_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_klausapp_CategoryScoreOverTimePeriod(arg) {
  if (!(arg instanceof klausapp_pb.CategoryScoreOverTimePeriod)) {
    throw new Error('Expected argument of type klausapp.CategoryScoreOverTimePeriod');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_klausapp_CategoryScoreOverTimePeriod(buffer_arg) {
  return klausapp_pb.CategoryScoreOverTimePeriod.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_klausapp_GetScoreChangePoPRequest(arg) {
  if (!(arg instanceof klausapp_pb.GetScoreChangePoPRequest)) {
    throw new Error('Expected argument of type klausapp.GetScoreChangePoPRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_klausapp_GetScoreChangePoPRequest(buffer_arg) {
  return klausapp_pb.GetScoreChangePoPRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_klausapp_OverallScore(arg) {
  if (!(arg instanceof klausapp_pb.OverallScore)) {
    throw new Error('Expected argument of type klausapp.OverallScore');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_klausapp_OverallScore(buffer_arg) {
  return klausapp_pb.OverallScore.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_klausapp_ScoreChangePoP(arg) {
  if (!(arg instanceof klausapp_pb.ScoreChangePoP)) {
    throw new Error('Expected argument of type klausapp.ScoreChangePoP');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_klausapp_ScoreChangePoP(buffer_arg) {
  return klausapp_pb.ScoreChangePoP.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_klausapp_TicketScoreOverTimePeriod(arg) {
  if (!(arg instanceof klausapp_pb.TicketScoreOverTimePeriod)) {
    throw new Error('Expected argument of type klausapp.TicketScoreOverTimePeriod');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_klausapp_TicketScoreOverTimePeriod(buffer_arg) {
  return klausapp_pb.TicketScoreOverTimePeriod.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_klausapp_TimePeriod(arg) {
  if (!(arg instanceof klausapp_pb.TimePeriod)) {
    throw new Error('Expected argument of type klausapp.TimePeriod');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_klausapp_TimePeriod(buffer_arg) {
  return klausapp_pb.TimePeriod.deserializeBinary(new Uint8Array(buffer_arg));
}


var KlausService = exports.KlausService = {
  getCategoryScoreOverTimePeriod: {
    path: '/klausapp.Klaus/getCategoryScoreOverTimePeriod',
    requestStream: false,
    responseStream: false,
    requestType: klausapp_pb.TimePeriod,
    responseType: klausapp_pb.CategoryScoreOverTimePeriod,
    requestSerialize: serialize_klausapp_TimePeriod,
    requestDeserialize: deserialize_klausapp_TimePeriod,
    responseSerialize: serialize_klausapp_CategoryScoreOverTimePeriod,
    responseDeserialize: deserialize_klausapp_CategoryScoreOverTimePeriod,
  },
  getTicketScoreOverTimePeriod: {
    path: '/klausapp.Klaus/getTicketScoreOverTimePeriod',
    requestStream: false,
    responseStream: false,
    requestType: klausapp_pb.TimePeriod,
    responseType: klausapp_pb.TicketScoreOverTimePeriod,
    requestSerialize: serialize_klausapp_TimePeriod,
    requestDeserialize: deserialize_klausapp_TimePeriod,
    responseSerialize: serialize_klausapp_TicketScoreOverTimePeriod,
    responseDeserialize: deserialize_klausapp_TicketScoreOverTimePeriod,
  },
  getOverallScore: {
    path: '/klausapp.Klaus/getOverallScore',
    requestStream: false,
    responseStream: false,
    requestType: klausapp_pb.TimePeriod,
    responseType: klausapp_pb.OverallScore,
    requestSerialize: serialize_klausapp_TimePeriod,
    requestDeserialize: deserialize_klausapp_TimePeriod,
    responseSerialize: serialize_klausapp_OverallScore,
    responseDeserialize: deserialize_klausapp_OverallScore,
  },
  getScoreChangePoP: {
    path: '/klausapp.Klaus/getScoreChangePoP',
    requestStream: false,
    responseStream: false,
    requestType: klausapp_pb.GetScoreChangePoPRequest,
    responseType: klausapp_pb.ScoreChangePoP,
    requestSerialize: serialize_klausapp_GetScoreChangePoPRequest,
    requestDeserialize: deserialize_klausapp_GetScoreChangePoPRequest,
    responseSerialize: serialize_klausapp_ScoreChangePoP,
    responseDeserialize: deserialize_klausapp_ScoreChangePoP,
  },
};

exports.KlausClient = grpc.makeGenericClientConstructor(KlausService);
