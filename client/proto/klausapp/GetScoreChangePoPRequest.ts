// Original file: proto/klausapp.proto

import type { TimePeriod as _klausapp_TimePeriod, TimePeriod__Output as _klausapp_TimePeriod__Output } from '../klausapp/TimePeriod';

export interface GetScoreChangePoPRequest {
  'firstPeriod'?: (_klausapp_TimePeriod | null);
  'secondPeriod'?: (_klausapp_TimePeriod | null);
}

export interface GetScoreChangePoPRequest__Output {
  'firstPeriod': (_klausapp_TimePeriod__Output | null);
  'secondPeriod': (_klausapp_TimePeriod__Output | null);
}
