# PoC-instance-metamodel-mapper

## Introduction

This project is a Proof-of-Concept of a mapper based on a Business Process Instance Metamodel. 

### Goal

The goal of this tool is to facilitate build mappings between common data sources in companies and the commented metamodel. To do this, it has been created a web based application using **Angular 6** (*JS*) for the frontend and **Laravel** (*PHP*) for the backend.

### Usage

The Proof-of-Concept allows the users to perform mainly 2 actions: 
- The creation of new mapped data based on the metamodel structure, such as Process Engines, Process Definitions, Activity Definitions, etc. These activities has a direct connection with the company data sources, being able in this version to connect to Oracle relational databases.
- The visualization of some statistic data related to the defined processes in a simple dashboard.

The way the data is connected with Oracle is using a driver implemented in the application, which performs some simple SQL queries to retrieve the existing tables and columns in the system. This way, the user is able to select the table and column where the data is stored by using a set of basic dropdowns

## Architecture

The architecture of the system can be seen in the following figure. The technologies used are:
- Angular 6 in frontend
- Laravel in backend
- MySQL for storing the metamodel entities and their data
- Oracle as technology used by companies to store their data
- Nginx as reverse proxy to serve the backend
- Laradock to facilitate wrapping a set of these services using docker

## Configuration

To set up the system first of all is needed to clone the repository using

`git clone https://github.com/IDEA-Research-Group/PoC-instance-metamodel-mapper.git`

First of all, you'll need to rename `env-example` file to `.env` to be used for the environment variables. The only thing you will need to be aware is that `APP_CODE_PATH_HOST` variable points to the path of the `backend` folder. If you have not changed at all the folders structure, then the path should be `../backend/`.

### Backend with docker environment

Once you have the project, get into `laradock` folder and type the following command to build the needed containers (You will need to have installed docker and docker-compose. If you have something like Docker Desktop installed, then you have all this already set up for you):

`docker-compose up -d nginx mysql php-fpm workspace redis`

This command will build and download all you need to set the docker environment. After this, you will need to run the migrations of the project to prepare MySQL with the structure of the Metamodel. To do this, first of all you'll need to access the command line of the laravel project. Use following command for this purpose:

`docker-compose exec workspace bash`

Now, you'll see something like `var/www` at the beginning of your terminal and you can run commands that belong to laravel. To run migrations simply type:

`php artisan migrate`

You'll need also to use this tool with an Oracle database running in your system. If you want to use it also with docker, you can use this image `wnameless/oracle-xe-11g:16.04`.

Note that if you have some of those services already running in your system for any other purposes, you might need to adapt your `.env` file to ensure ports and configurations of the services have no conflict.

### Frontend

In order to use the application, you will need to connect your backend through the UI provided by the frontend project. You can get into `frontend` folder to launch the application. To do that, you will need to install all the dependencies and run the application. For this, we will use:

`npm install`

`npm run start`

Note that you will also need to have NodeJS installed on your system to be able to use npm commands.
