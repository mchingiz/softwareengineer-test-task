import { Server, ServerCredentials } from "@grpc/grpc-js";
import { KlausService } from "../server/proto/klausapp_grpc_pb";
import { KlausServer } from "./services";
require('dotenv').config();

const server = new Server();
server.addService(KlausService, KlausServer);

const uri = `${process.env.ADDRESS}:${process.env.PORT}`;
console.log(`Listening on ${uri}`);
server.bindAsync(uri, ServerCredentials.createInsecure(), (err) => {
    if (err) console.log(err);
    server.start();
});
