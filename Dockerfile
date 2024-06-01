# This is a dockerized version of a server that you can easily deploy somewhere.
# If you don't want server rendering, you can safely delete this file.

FROM node:20-bookworm
RUN apt-get update
RUN apt-get install -y chromium

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
  PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

ENV NODE_ENV production

WORKDIR /app

COPY package.json .

COPY .npmrc .npmrc

COPY . ./

RUN npm install

RUN npm install -g tsx

RUN rm -f .npmrc

EXPOSE 3002

CMD [ "npm", "run", "api" ]
