FROM nginx:1.23.1-alpine

COPY .nginx/nginx.conf /etc/nginx/nginx.conf
COPY  ./dist/charts-ui /usr/share/nginx/html

EXPOSE 4201 80

CMD ["nginx", "-g", "daemon off;"]
