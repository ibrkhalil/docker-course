* Docker creates intermediate images for running commands then terminates it after perserving it's filesystem and also saves the primary command (CMD).

* Docker caches previous runs and only updates/processes additions to dockerfile only. And order of operations __Really Matters__.
* To tag a docker image, We use __DOCKER_ID/CONTAINER_NAME:VERSION__
* Docker can commit/create a container from the CLI
Example
```bash
docker run -it alpine sh
# INSIDE THAT container run
apk add --update redis
# in another terminal
# Get previous container_id, Let's call it X using `docker ps`
docker commit -c 'CMD ["redis-server"]' CONTAINER_X_ID
```
