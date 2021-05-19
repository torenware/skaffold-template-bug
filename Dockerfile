FROM node:alpine

ARG SEE_MY_ARG
ENV SEE_MY_ARG=${SEE_MY_ARG:-not_found}  


WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --prod
COPY . .

CMD ["yarn", "execute"]
