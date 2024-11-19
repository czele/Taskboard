FROM node:22.11.0-slim

RUN npm install -g @angular/cli typescript

WORKDIR /app

COPY package.json ./

RUN npm install

RUN npm run build

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
