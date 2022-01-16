FROM node:alpine
WORKDIR /usr/src/app
COPY . .
ENV TZ=America/Guayaquil
RUN apk add tzdata && \
    cp /usr/share/zoneinfo/$TZ /etc/localtime && \
    npm i --only=prod 
CMD npm start