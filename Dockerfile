FROM node

WORKDIR /usr/src/app

COPY app.js ./

CMD ["node", "app.js"]
