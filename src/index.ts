import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
const PROTO_PATH = __dirname+'/../proto/Mainservice.proto';
const PORT = 50051;
const SERVER_URI = `0.0.0.0:${PORT}`;

const packageDef = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const mainServiceProto = grpc.loadPackageDefinition(packageDef).MainService;


const grpcServer = new grpc.Server();


grpcServer.addService(mainServiceProto.service, {
    healthCheck: health,
    sayHello: hello,
});


grpcServer.bindAsync(SERVER_URI, grpc.ServerCredentials.createInsecure(), () => {
    grpcServer.start();
    console.log(`gRPC server is running on port ${PORT}`);
});




import { ProtoGrpcType } from './proto/example';
import { ExampleHandlers } from './proto/example_package/Example';

const exampleServer: ExampleHandlers = {
    // server handlers implementation...
};

const packageDefinition = protoLoader.loadSync('./proto/example.proto');
const proto = (grpc.loadPackageDefinition(
    packageDefinition
) as unknown) as ProtoGrpcType;

const server = new grpc.Server();
server.addService(proto.example_package.Example.service, exampleServer);