# FROM node:current-buster
# FROM node:latest
FROM node:14-alpine
# FROM nvidia/cudagl@11.4.0-devel-ubuntu18.04

# RUN apt-get update
RUN apt-get update && apt-get install -y libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libasound2

# RUN apt-get install -y node
# RUN apt-get install -y chromium

WORKDIR /app

COPY package.json .

COPY .npmrc .npmrc

RUN npm install

RUN rm -f .npmrc

COPY . .

EXPOSE 3002

CMD [ "npm", "run", "api" ]
