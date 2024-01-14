FROM node:lts-alpine3.12 as build

# WORKDIR /frontend
RUN pwd
COPY ./frontend/package.json ./
COPY ./frontend/yarn.lock ./
RUN yarn install
COPY ./frontend/ ./
RUN yarn build

FROM nginx:1.25

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
