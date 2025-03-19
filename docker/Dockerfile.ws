FROM oven/bun:1

WORKDIR /app

COPY ./packages ./packages
COPY ./package.json ./package.json
COPY ./bun.lock ./bun.lock
COPY ./turbo.json ./turbo.json
COPY ./apps/ws-service ./apps/ws-service

RUN bun install

RUN bun run db:generate

EXPOSE 8080

CMD [ "bun", "run", "start:ws" ]