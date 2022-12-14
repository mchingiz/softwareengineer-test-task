import { Server, ServerCredentials } from "@grpc/grpc-js";
import { KlausService } from "../server/proto/klausapp_grpc_pb";
import { KlausServer } from "./services";

const server = new Server();
server.addService(KlausService, KlausServer);

const port = 9090;
const uri = `0.0.0.0:${port}`;
console.log(`Listening on ${uri}`);
server.bindAsync(uri, ServerCredentials.createInsecure(), (err) => {
  if (err) console.log(err);
  server.start();
});
