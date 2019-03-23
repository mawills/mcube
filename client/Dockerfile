# https://medium.com/@iamnayr/a-multi-part-analysis-of-node-docker-image-sizes-using-yarn-vs-traditional-npm-2c20f034c08f
FROM node:10.15.3-alpine

RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client

ADD . /usr/src/client

RUN npm install -g -s --no-progress yarn && \
    yarn && \
    yarn run build && \
    # error Command "prune" not found.
    # yarn run prune && \
    yarn cache clean

CMD ["yarn", "start"]
EXPOSE 3000
