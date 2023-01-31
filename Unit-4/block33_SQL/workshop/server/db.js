const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'passpass',
    host: 'localhost',
    database: 'authtutorial',
    port: 5432,
});

module.exports = { pool };