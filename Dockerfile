FROM node:18.15.0-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]