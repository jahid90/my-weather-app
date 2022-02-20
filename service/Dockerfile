FROM registry.jahiduls.mint/node:16-alpine

RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . ./

EXPOSE 3000

CMD ["pnpm", "start"]
