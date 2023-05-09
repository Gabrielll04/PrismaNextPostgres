FROM node:alpine

WORKDIR /app

COPY . .
COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma
RUN apk add nmap-ncat

EXPOSE 3000