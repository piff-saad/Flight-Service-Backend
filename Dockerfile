FROM node
WORKDIR /app/
ADD ./package.json ./
RUN yarn install
ADD ./ ./
CMD ["node", "app.js"]
