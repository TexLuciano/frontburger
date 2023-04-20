FROM node

WORKDIR /app

COPY package.json .

COPY . .

RUN npm i

EXPOSE 5173

CMD [ "npm", "run", "dev" ]