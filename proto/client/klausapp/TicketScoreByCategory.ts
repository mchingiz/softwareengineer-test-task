// Original file: proto/klausapp.proto


export interface _klausapp_TicketScoreByCategory_CategoryScore {
  'name'?: (string);
  'score'?: (number | string);
}

export interface _klausapp_TicketScoreByCategory_CategoryScore__Output {
  'name': (string);
  'score': (number);
}

export interface TicketScoreByCategory {
  'ticketId'?: (number);
  'categoryScores'?: (_klausapp_TicketScoreByCategory_CategoryScore)[];
}

export interface TicketScoreByCategory__Output {
  'ticketId': (number);
  'categoryScores': (_klausapp_TicketScoreByCategory_CategoryScore__Output)[];
}
