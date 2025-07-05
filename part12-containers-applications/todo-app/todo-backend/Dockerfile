FROM node:20

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm ci 
COPY --chown=node:node . .

EXPOSE 3000

ENV DEBUG=todo-backend:*

USER node

CMD ["npm", "start"]