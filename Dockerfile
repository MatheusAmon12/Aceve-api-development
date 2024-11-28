FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

RUN yarn build

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]