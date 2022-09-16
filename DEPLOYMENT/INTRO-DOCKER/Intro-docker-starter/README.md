# INTRO TO DOCKER

## OBJECTIVES

-Today we will learn what the problem docker solves

-We will learn what Docker is, what a docker file, docker image, and a docker container

-We will learn how to create a dockerfile, docker image, and to run the image in a docker continer


## What is Docker trying to solve?
- To get projects to work across the board by reducing friction that developers face during enviornment set up.


## What is Docker?
- A tool that facilitates containing an enviornment for developers without having them to manually set it up. Docker enables you to separate your application from your infrastructure so you can develop you software/application quickly.

- All of your code can configurations will be packaged where you can port it and move it to any other computer/user/developer etc.

- This is accomplished through docker images and containers.

## What is a Docker file, docker image, and a docker container?
- DMG - disk image file

- Docker file - contains a set of docker instructions that will help us create a docker image. We define this file within our application files.

- Docker Image - instructions that tell docker how to create the container. Instructions can include what build, location, what ports, commands, packages that should be installed, etc. It's a template that defines how an image will be realized at runtime in the container. The image contains all the information to build a container exactly the same way across any system. You can think of an image like a cooking recipe/ blueprint/ instructions.

- Docker Container - This is the virtual operating system itself. How it will operate will depend on the docker image.


## Creating a docker file, docker image, and running the image in the container.

FROM - A parent image that refers to the FROM directive in Docker. Most Dockerfiles start from a parent image (template). Since we are working with node our parent template will be FROM node:versionOfNode

COPY - Helps bundle your application source code inside of a docker image.

The first path is telling docker to use everything from this current directory

The second path indicates where the files should be stored inside the docker image. This is detached from the application in your local directory.

WORKDIR - Similar to CD, WORKDIR changes the directory. Since we copied everything into /app, this becomes the 'root' of our project. We need to be inside of /app to be able to work on it.

RUN - command trigger that tells docker to npm install

EXPOSE - it will bind the docker image to the port that your sever will be listening to

CMD - command that launches a process that you define.

Docker Image -

docker build . -t nameofimage

all lower case


To active the docker image so it runs in a docker container:

docker run -p 3000:3000 plantstore