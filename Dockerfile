FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm ci --only=production

COPY . .
EXPOSE 9091
CMD [ "node", "server" ]
