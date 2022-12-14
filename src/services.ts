import { IKlausServer } from "../server/proto/klausapp_grpc_pb"
import { getTicketScore } from "./endpoints/get-ticket-score";
import { getOverallScore } from "./endpoints/get-overall-score";
import { getScoreChangePoP } from "./endpoints/get-score-change-pop";
import { getCategoryScore } from "./endpoints/get-category-score";

export const KlausServer: IKlausServer = {
    getOverallScore,
    getTicketScore,
    getScoreChangePoP,
    getCategoryScore,
};