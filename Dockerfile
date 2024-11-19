FROM node:22.11.0-slim
RUN npm install -g @angular/cli typescript
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN ng build --configuration=production
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]
