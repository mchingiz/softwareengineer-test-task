const grpc = require("@grpc/grpc-js")
const protoLoader = require("@grpc/proto-loader")
const loaderOptions = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};
const packageDef = protoLoader.loadSync("./protos/klausapp.proto", loaderOptions)
const grpcObject = grpc.loadPackageDefinition(packageDef);

const server = new grpc.Server()

server.addService(grpcObject.Klaus.service, {
    getOverallScore: (timePeriod, callback) => {
        callback(null, {score: 2})
    },
    getCategoryScoreOverTimePeriod: (timePeriod, callback) => {},
    getTicketScoreOverTimePeriod: (timePeriod, callback) => {},
    getScoreChangePoP: ({firstPeriod, secondPeriod}, callback) => {},
});

server.bindAsync(
    "127.0.0.1:50051",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
        console.log("Server running at http://127.0.0.1:50051");
        server.start();
    }
);