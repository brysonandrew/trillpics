# This is a dockerized version of a server that you can easily deploy somewhere.
# If you don't want server rendering, you can safely delete this file.

FROM node:alpine

# Installs latest Chromium (85) package.
RUN apk add --no-cache \
  chromium \
  nss \
  freetype \
  freetype-dev \
  harfbuzz \
  ca-certificates \
  ttf-freefont \
  ffmpeg

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
  PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /app

COPY package.json .

COPY .npmrc .npmrc

RUN npm install

RUN rm -f .npmrc

COPY . .

EXPOSE 3002

CMD [ "npm", "run", "api" ]
