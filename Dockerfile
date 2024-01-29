FROM node:16
WORKDIR /career-path
COPY . .
RUN yarn cache clean
RUN yarn install
EXPOSE 3000
CMD yarn start

