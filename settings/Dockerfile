FROM node:alpine
WORKDIR /usr/src/app
COPY . .
RUN apk tzdata && \
    cp /usr/share/zoneinfo /etc/localtime && \
    npm i --only=prod
CMD npm start