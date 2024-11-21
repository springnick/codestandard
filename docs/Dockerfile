FROM nginx:1.21.0-alpine

WORKDIR /usr/share/nginx/html

RUN mkdir /dist
RUN mkdir /etc/nginx/ssl
COPY ./dist ./dist
# COPY ./default.conf /etc/nginx/conf.d/default.conf
# COPY ./ssl/hellocoders.cn_bundle.pem /etc/nginx/ssl/
# COPY ./ssl/hellocoders.cn.key /etc/nginx/ssl/

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]

