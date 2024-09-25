# Server Dockerfile
FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN [ -d .temp ] || mkdir .temp
RUN chmod +x database.sh

EXPOSE 1071

CMD ["node", "index.js"]