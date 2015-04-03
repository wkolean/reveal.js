FROM node:latest

RUN mkdir /data
ADD www /data
WORKDIR /data/www

RUN npm install

EXPOSE 8888

CMD ["node", "/vagrant/www/app.js"]