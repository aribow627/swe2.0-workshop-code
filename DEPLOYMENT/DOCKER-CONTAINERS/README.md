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

# exercise:

1. Write a Dockerfile in the client folder and in the server folder.

For the client Dockerfile:
Use the node:16-alpine parent image, create a directory called /app and copy all of the client content into that directory. Change the directory to /app. make sure all node modules are installed and we build the client app using npm install && npm run build. Run apk add g++ make py3-pip to prevent problems with installation for certain node users. We are going to make sure that docker is listening to port 1234. Finally lets implement the command that starts our server file with “node server.js”

FROM node:16-alpine

COPY  . /app


For the server Dockerfile:
Use the parent image node:16. Create an enviornment variable[look up this docker command] called NODE_ENV=development. Change our working directory to /app. Copy all the content from package.json into . 
Make sure we npm install. Copy all content into the top level of our directory . . 
Expose port 3000 so docker is actively listening to that port
run the command node server.js


Make sure you are in the parent folder that contains the dockerfile to run the following commands:
What is the command that will help us compile our Dockerfile that will build into a docker image?
docker build . -t nameofimage

How do we run our docker images in a container that listens to a specific port?
docker run -p port:port nameofimage

2. Manually build the docker image from the docker file and run each image separately in containers.
    - come back as a group
    - stop the containers and remove each image

3. Demo on how to write our docker-compose.yml file -> the command to run this file

- create a file called docker-compose.yml
- docker-compose up
    - build all images specified in the docker-compose.yml file

    - run each image in containers 
        docker-compose up

    - to stop all processes
        docker-compose down


