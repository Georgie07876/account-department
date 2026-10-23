FROM node:24-alpine AS build

WORKDIR /app
ENV HUSKY=0

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

COPY . .
RUN npx nuxt prepare && npm run generate

FROM nginx:1.27-alpine

COPY deploy/nginx.conf /etc/nginx/nginx.conf
COPY deploy/nginx-security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build /app/.output/public /usr/share/nginx/html
