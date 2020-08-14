FROM node:10

WORKDIR /src

COPY ["package*.json", "app/"]
COPY ["node_app/package*.json", "app/node_app/"]

WORKDIR /src/app
RUN npm install

WORKDIR /src/app/node_app
RUN npm install

WORKDIR /src/app
COPY . .

WORKDIR /src/app
RUN npm run build -- --c production

WORKDIR /src/app/node_app
EXPOSE 8080
CMD [ "node", "index.js" ]