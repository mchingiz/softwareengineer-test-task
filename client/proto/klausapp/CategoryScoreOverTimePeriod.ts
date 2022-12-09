// Original file: proto/klausapp.proto

import type { Category as _klausapp_Category, Category__Output as _klausapp_Category__Output } from '../klausapp/Category';
import type { DateScore as _klausapp_DateScore, DateScore__Output as _klausapp_DateScore__Output } from '../klausapp/DateScore';

export interface CategoryScoreOverTimePeriod {
  'category'?: (_klausapp_Category | null);
  'ratingCount'?: (number);
  'scoreByDate'?: (_klausapp_DateScore)[];
  'overallScore'?: (number);
}

export interface CategoryScoreOverTimePeriod__Output {
  'category': (_klausapp_Category__Output | null);
  'ratingCount': (number);
  'scoreByDate': (_klausapp_DateScore__Output)[];
  'overallScore': (number);
}
