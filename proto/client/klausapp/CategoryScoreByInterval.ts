// Original file: proto/klausapp.proto


export interface _klausapp_CategoryScoreByInterval_IntervalScore {
  'interval'?: (string);
  'score'?: (number | string);
}

export interface _klausapp_CategoryScoreByInterval_IntervalScore__Output {
  'interval': (string);
  'score': (number);
}

export interface CategoryScoreByInterval {
  'id'?: (number);
  'name'?: (string);
  'ratingCount'?: (number);
  'scoreByInterval'?: (_klausapp_CategoryScoreByInterval_IntervalScore)[];
  'overallScore'?: (number | string);
}

export interface CategoryScoreByInterval__Output {
  'id': (number);
  'name': (string);
  'ratingCount': (number);
  'scoreByInterval': (_klausapp_CategoryScoreByInterval_IntervalScore__Output)[];
  'overallScore': (number);
}
