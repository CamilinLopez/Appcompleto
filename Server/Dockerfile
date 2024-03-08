FROM node:20.11.1
WORKDIR /myapp
COPY package*.json .
RUN npm install
COPY . .
CMD npm start 