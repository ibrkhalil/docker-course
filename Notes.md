# Course notes

* Docker creates intermediate images for running commands then terminates them after perserving it's filesystem and also saves the primary command (CMD).

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
  
*** End Section 3

* Try to use a baseImage that has the packages that you need
* Must copy the files to your docker image so that all of your required files are there.
  
```docker
COPY FROM_PATH TO_PATH
```

* We can do port mapping if we want to make requests to ports to our docker container

```bash
docker run -p YOUR_PORT_NUMBER:DOCKER_PORT_NUMBER IMG_NAME
```

* You can set a working directory in the docker imge using

```docker
WORKDIR ABSOLUTE_PATH_TO_WORKDIR
```

*** End Section 4

* To have inter-container communication/networking we can use Docker compose or Docker CLI's Network features. (But Docker Compose is more commonly used)

* Restart policies tells docker when to restart containers if they crash.

*** End Section 5

* Instead of specifying volumes in docker run, We can use docker-compose.
  
* We can add a separate entry in `docker-compose.yml` for running tests.

* `nginx` can be used as a server to serve the production build of react apps when using `docker`

* We can copy resources from different steps by declaring it using the keyword `as` and then using the --from argument when copying

```docker
FROM node:alpine as X
COPY --from=X FROM_PATH TO_PATH
```

*** End Section 6
Kubernetes main use-case is horizontal scaling. for now lol 😆

Kubernetes expects images to be prebuilt, While docker can optionally build them for us.
One config file per 'object' on Kubernetes while docker can have a single docker-compose.yml file
Manual networking on Kubernetes is required compared to the automagical networking that docker had.

Pods in Kubernetes are a grouping of container(s).
Services in Kubernetes are used to setup networking between Kubernetes objects.
Tightly-coupled/highly-interdependent containers/services must be deployed in the same Pod.
Selectors/Labels allows us to direct traffic from Services to Pods.
Kuberenetes saves us a lot of time by doing it's operations declaratively, And they __can__ be done imperatively too.

