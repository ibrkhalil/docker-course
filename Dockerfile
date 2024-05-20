# Use an existing docker image as a base
FROM alpine

# Download and install a dependency 
RUN apk add --update redis
RUN apk add --update gcc

# Tell the image it's starting command
CMD ["redis-server"]
