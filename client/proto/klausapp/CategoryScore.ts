// Original file: proto/klausapp.proto

import type { Category as _klausapp_Category, Category__Output as _klausapp_Category__Output } from '../klausapp/Category';

export interface CategoryScore {
  'category'?: (_klausapp_Category | null);
  'score'?: (number);
}

export interface CategoryScore__Output {
  'category': (_klausapp_Category__Output | null);
  'score': (number);
}
