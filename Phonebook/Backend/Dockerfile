FROM node:20

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm ci 
COPY --chown=node:node . .



ENV DEBUG=todo-backend:*
EXPOSE 3000
USER node

CMD ["npm", "start"]