FROM node:23-alpine3.19


COPY . /app

WORKDIR /app
RUN npm i
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]