FROM node
WORKDIR /app
COPY package.json .
# RUN npm install
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm install --only=production; \
    else npm install; \
    fi
COPY . ./
EXPOSE $PORT
CMD ["node","index.js"]