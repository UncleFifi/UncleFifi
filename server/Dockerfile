FROM node:14
WORKDIR /typescript/server
COPY ./package.json .
RUN npm i -g typescript
RUN yarn
COPY . .
RUN yarn build
# ENVIRONMENT VARIABLES
ENV PORT=3000
ENV IS_DOCKER=true
CMD ["yarn", "start"]