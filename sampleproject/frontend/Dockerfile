FROM node:16-alpine as builder

WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
# Nginx will start automatically as it's default behavior when starting is to start hosting. 
