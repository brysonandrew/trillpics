# FROM node:current-buster
# FROM node:latest
FROM node:20-bookworm
RUN apt-get update
RUN apt-get install -y chromium

WORKDIR /app

COPY package.json .

COPY .npmrc .npmrc

RUN npm install

RUN rm -f .npmrc

COPY . .

EXPOSE 3002

CMD [ "npm", "run", "api" ]
