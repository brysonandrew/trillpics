FROM node:20-bookworm

RUN apt-get update
RUN apt-get install -y chromium

EXPOSE 3000
ENV PORT="3000"

COPY .npmrc .npmrc
COPY package.json package*.json tsconfig.json* remotion.config.* .prettierrc* ./
COPY config ./config
COPY src ./src
COPY server ./server
COPY assets ./assets

RUN npm i

RUN rm -f .npmrc

CMD ["run-p", "dev:*", "--print-label"]
