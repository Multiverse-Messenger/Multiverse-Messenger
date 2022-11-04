FROM node:16.15.0
COPY . /multiverse-messenger
WORKDIR /multiverse-messenger
RUN npm install
EXPOSE 3000
CMD npm run win


