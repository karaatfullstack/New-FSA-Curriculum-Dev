// init express app
const express = require('express');
const app = express();
const { pool } = require('./db');
const cors = require('cors');
const PORT = 8080;

// middleware
app.use(cors());
app.use(express.json()); // req.body

// connect to pg
async function connect() {
    try {
        await pool.connect();
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
    }
}

connect();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});