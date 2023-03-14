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

### Users

| Method | Route           | Description              | Public | Parameters               |
| ------ | --------------- | ------------------------ | ------ | ------------------------ |
| POST   | /users/register | Creates a new user       | true   | Name, Username, Password |
| POST   | /users/login    | Logs in a user           | true   | Username, Password       |
| GET    | /users/me       | Returns the current user | false  | JWT Token                |

### Bikes

| Method | Route      | Description        | Public | Parameters                                 |
| ------ | ---------- | ------------------ | ------ | ------------------------------------------ |
| GET    | /bikes     | Returns all bikes  | true   |                                            |
| GET    | /bikes/:id | Returns a bike     | true   |                                            |
| POST   | /bikes     | Creates a new bike | false  | color, description, size, price, JWT Token |
| PATCH  | /bikes/:id | Updates a bike     | false  | color, description, size, price, JWT Token |
| DELETE | /bikes/:id | Deletes a bike     | false  | JWT Token                                  |
| DELETE | /bikes     | Deletes all bikes  | false  | JWT Token                                  |

### Rentals

| Method | Route        | Description             | Public | Parameters                                           |
| ------ | ------------ | ----------------------- | ------ | ---------------------------------------------------- |
| GET    | /rentals     | Returns all rentals     | false  | JWT Token                                            |
| GET    | /rentals/:id | Returns a single rental | false  | JWT Token                                            |
| POST   | /rentals     | Creates a new rental    | false  | bike_id, rental_date_from, rental_date_to, JWT token |
| PATCH  | /rentals/:id | Updates a rental        | false  | bike_id, rental_date_from, rental_date_to, JWT Token |
| DELETE | /rentals/:id | Deletes a rental        | false  | JWT Token                                            |
| DELETE | /rentals     | Deletes all rentals     | false  | JWT Token                                            |
