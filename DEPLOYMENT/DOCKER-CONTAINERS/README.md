# DOCKER CONTAINERS

# What are we learning today?

- Container and image management. We are going to learn more docker commands that will make our docker workflow more seamlessly. We are also going to learn about the correct sequencing when managing shutting down containers, and deleting docker images.

-docker-compose <- how to create a docker-compose.yml file that will help us build multiple docker images and run in in multiple containers through one file and one command. 

# Container and Image maintenance

-lets learn some basic docker workflow commands

- list all docker containers:   docker ps
- list all docker images: docker images
- how to stop a container: docker stop containerId
- delete a docker image: docker rmi imageId

-Proper sequencing to stop containers and to delete a docker image
list out all the docker containers [docker ps] -> stop the docker container [docker stop containerId] -> list out all docker images [docker images] ->  stop a docker image [docker rmi imageId] 

