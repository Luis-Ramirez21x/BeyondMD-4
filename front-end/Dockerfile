FROM node:alpine
WORKDIR /issue-tracker-app
COPY ./package.json /issue-tracker-app
RUN npm i
COPY . .

CMD npm start