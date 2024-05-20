# Specify the base image
FROM node:14-alpine

WORKDIR /usr/app

# Install deps and copy files

# This step means that docker will only run npm install if and only if package.json has changes
# It will NOT respond to changes in project files
COPY ./package.json ./ 
RUN npm install

COPY ./ ./

# Run default command
CMD [ "npm", "start" ]
