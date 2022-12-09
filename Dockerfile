FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx tsc
RUN npm run generate-ts-type-proto

EXPOSE 4000
CMD ["node", "dist/index.js"]
