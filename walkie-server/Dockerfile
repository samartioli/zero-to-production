FROM node:4.4.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
RUN npm install --production

COPY index.js /usr/src/app/index.js

CMD node index.js
