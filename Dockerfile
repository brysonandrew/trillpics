FROM node:20-bookworm

RUN apt-get update
RUN apt-get install -y chromium
COPY .npmrc .npmrc
COPY package.json package*.json tsconfig.json* remotion.config.* .prettierrc* ./
COPY config ./config
COPY src ./src
COPY assets ./assets

RUN npm i

RUN rm -f .npmrc

CMD ["npm", "run", "studio"]