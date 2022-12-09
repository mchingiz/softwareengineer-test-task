// Original file: proto/klausapp.proto

import type { Ticket as _klausapp_Ticket, Ticket__Output as _klausapp_Ticket__Output } from '../klausapp/Ticket';
import type { CategoryScore as _klausapp_CategoryScore, CategoryScore__Output as _klausapp_CategoryScore__Output } from '../klausapp/CategoryScore';

export interface TicketScoreOverTimePeriod {
  'ticket'?: (_klausapp_Ticket | null);
  'scoreByCategories'?: (_klausapp_CategoryScore)[];
}

export interface TicketScoreOverTimePeriod__Output {
  'ticket': (_klausapp_Ticket__Output | null);
  'scoreByCategories': (_klausapp_CategoryScore__Output)[];
}
