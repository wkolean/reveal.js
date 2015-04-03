FROM node:latest

RUN apt-get update
RUN apt-get install -y git

RUN mkdir /data
WORKDIR /data
RUN git clone https://github.com/wkolean/docker-demo-files.git

WORKDIR /data/docker-demo-files

RUN npm install

EXPOSE 8888

CMD ["node", "."]
