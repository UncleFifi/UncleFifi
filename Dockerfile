FROM node:10-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install 
RUN node ./node_modules/webpack-cli/bin/cli.js
# NGINX Script Section
FROM nginx:alpine
EXPOSE 80
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]