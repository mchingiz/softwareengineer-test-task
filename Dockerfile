FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# download protoc-gen-grpc-web https://medium.com/front-end-weekly/implementation-of-grpc-in-web-and-server-with-typescript-165e8ca0155b
# download protoc

# protoc-gen-js not found: https://github.com/grpc/grpc-web/issues/704#issuecomment-1215965557

RUN npm run generate-ts-type-proto
RUN npx tsc

EXPOSE 4000
CMD ["node", "dist/index.js"]
