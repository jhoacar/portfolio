FROM nginx:1.19-alpine
EXPOSE 80
ADD index.html /usr/share/nginx/html
