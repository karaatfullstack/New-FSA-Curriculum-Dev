// import pg module to connect to postgres
const { Pool } = require("pg");

// import dotenv
require('dotenv').config();

/* Creating a new pool of connections to the database. */
const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
})

/* Exporting the pool object so that it can be used in other files. */
module.exports = { pool };