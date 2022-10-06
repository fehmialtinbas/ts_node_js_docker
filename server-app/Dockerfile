FROM node:alpine as base

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

CMD ["node", "build/app.js"]