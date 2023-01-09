# Build & Test
FROM node:16-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ADD server.js ./

COPY package*.json ./

RUN npm install

CMD ["npm", "start"]