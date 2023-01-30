const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    password: 'passpass',
    host: 'localhost',
    database: 'chris',
    port: 5432,
})

module.exports = { pool };
