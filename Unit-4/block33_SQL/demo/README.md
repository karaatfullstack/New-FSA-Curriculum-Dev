# Bikes Bikes Bikes API
an API for a bicycle rental service called Bikes Bikes Bikes using node, express, and postgresql

# PostgreSQL Setup

PostgreSQL should be installed and working at port 5432.

Login as "postgres" user 

    sudo -u postgres psql ## on mac or linux

    or 

    psql -U postgres ## on windows

Initialize new Database

    CREATE DATABASE bikesbikesbikes;

Show all databases

    \l

Connect to database
    \c bikesbikesbikes

## Getting Started
Clone the repository

    git clone ...

Install Packages

    npm i

Seed Database

    npm run seed    
    
Start Server

    npm run start:dev

## API Endpoints

|  Method  |   Route      | Description | Public |
| ----------- | ----------- | ----------- | ----------- |
| GET  | /bikes      | Returns all bikes       | true |
| GET  | /bikes/:id   | Returns a single bike        | true |
| POST  | /bikes   | Creates a new bike        | false |
| PATCH  | /bikes/:id   | Updates a bike        | false |
| DELETE  | /bikes/:id   | Deletes a bike        | false |
| DELETE  | /bikes   | Deletes all bikes        | false |
| GET  | /rentals   | Returns all rentals        | false |
| GET  | /rentals/:id   | Returns a single rental        | false |
| POST  | /rentals   | Creates a new rental        | false |
| PATCH  | /rentals/:id   | Updates a rental        | false |
| DELETE  | /rentals/:id   | Deletes a rental        | false |
| DELETE  | /rentals   | Deletes all rentals        | false |
| POST  | /users/register   | Creates a new user        | true |
| POST  | /users/login   | Logs in a user        | true |
| GET  | /users/me   | Returns the current user        | false |