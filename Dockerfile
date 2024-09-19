FROM node:alpine AS app

WORKDIR /my-app

COPY . .

RUN npm run build


FROM nginx:alpine

EXPOSE 3000

COPY  --from=app /my-app/build /usr/share/nginx/html 

