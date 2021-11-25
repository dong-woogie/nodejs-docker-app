FROM node:12

WORKDIR /the/workdir/path

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["node", "server.js"]