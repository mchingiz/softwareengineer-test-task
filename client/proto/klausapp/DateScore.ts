// Original file: proto/klausapp.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface DateScore {
  'date'?: (_google_protobuf_Timestamp | null);
  'score'?: (number);
}

export interface DateScore__Output {
  'date': (_google_protobuf_Timestamp__Output | null);
  'score': (number);
}
