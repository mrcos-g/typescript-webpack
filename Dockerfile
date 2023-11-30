FROM node:20.9-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY dist dist

EXPOSE 3000

CMD [ "yarn", "start" ]