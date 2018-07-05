FROM node

RUN mkdir /src

RUN npm install nodemon -g

WORKDIR /src
COPY . /src
RUN npm install

EXPOSE 4000

CMD npm run dev
