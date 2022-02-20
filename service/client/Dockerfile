# Build server
FROM registry.jahiduls.mint/node:16-alpine as builder

RUN npm i -g pnpm

WORKDIR /assets

COPY package.json pnpm-lock.yaml .
RUN pnpm install

COPY . .
RUN pnpm build

# Production server
FROM registry.jahiduls.mint/nginx:alpine

COPY --from=builder /assets/dist /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
