FROM node:alpine
WORKDIR /usr/src/app
COPY . .
RUN apk add tzdata && \
    cp /usr/share/zoneinfo/$TZ /etc/localtime && \
    npm i --only=prod 
EXPOSE 3000
CMD npm start