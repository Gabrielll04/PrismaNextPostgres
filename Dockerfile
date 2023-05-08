FROM node:alpine

WORKDIR /app

COPY . .
COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma
RUN npx prisma db push

EXPOSE 3000

CMD ["npm", "run", "dev"]