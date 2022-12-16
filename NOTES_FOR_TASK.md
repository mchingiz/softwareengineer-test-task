## General notes

I wasn't very familiar with gRPC and it was my first time using it. Initially it took quite
significant time to at least get the server running. It would have been easier if I was using
plain Javascript, but as it is vital for gRPC to have correct response and request structure
I decided to go with Typescript.
For database access, I initially wanted to use ORM but then decided that it would be over-engineering for this task
and there were more import aspects to the task.

I enjoyed working on it as I was already planning to experiment gRPC. But to be honest it was a quite
time-consuming task for recruitment process. So I would very much appreciate a detailed feedback as well.

### Task 1

You can find the algorithm in `src/utils.ts`

## How to run

### With docker

Project is dockerized and can be run with below commands

1. Build the image with `docker build . --tag klausapp_image`
2. Run the image with `docker run --restart=on-failure -p 8080:8080 --name klausapp_task klausapp_image`

You can access the project on `localhost:8080`. Even though I have created client code as well from proto,
I have been using Postman during development. Unfortunately, Postman doesn't allow exporting gRPC collections yet.
But it should be fairly easy by defining API with `proto/klausapp.proto` file.

### For development

Requirements:

-   Node 18
-   Npm 8

1. Create the image: `docker build -t klausapp-dev-image . -f Dockerfile.dev`
2. Run the container:
   `docker run -it --rm --name dev -p 9229:9229 -p 8080:8080 -v /app/node_modules -v $(pwd):/app klausapp-dev-image bash`

It will run the container and mount our host directory to container, so that the code changes we make
are immediately reflected in the container. But `node_modules` will be excluded from mounted folders
because some dependencies has OS specific implementations.
3) Switch to folder `/app` and install the dependencies in container: `npm install`
4) Run the application with `npm run dev`

Project will be accessible on port `8080` and the debugger on `9229`

#### Also...

-   If you have updated proto files, then below should be run
    -   `npm run generate-proto-code-for-server`
    -   `npm run generate-proto-code-for-client`
-   For tests, run `npm test`

## Improvement ideas

For some stuff I just didn't have time, so I will note them here.

-   I would have more extensive testing. I am also aware that the tests for `getTicketScore` endpoint
    is missing.
-   I would also use docker-compose as the commands to get it running is long and prone to mistakes.
