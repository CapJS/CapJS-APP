FROM node:5

# Install Dependencies
COPY package.json /app/package.json
RUN cd /app && npm install

COPY . /app


EXPOSE 80



CMD cd /app && npm start
