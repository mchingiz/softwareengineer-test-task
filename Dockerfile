FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build    # compile TS
RUN npm run start    # run with PM2

EXPOSE 8080
CMD ["node", "dist/src/index.js"]
