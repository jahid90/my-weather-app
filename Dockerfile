FROM node

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY app.js ./

CMD ["node", "app.js"]
