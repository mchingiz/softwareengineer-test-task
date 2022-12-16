FROM node:18-alpine
RUN apk add g++ make py3-pip

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 8080

RUN npm run build    # compile TS

CMD ["node", "dist/src/index.js"]
