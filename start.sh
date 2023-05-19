#!/bin/sh
while ! nc -z postgres 5432; do sleep 1; done; npx prisma db push; npx prisma generate; npm run dev