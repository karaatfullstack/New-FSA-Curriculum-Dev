const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const PORT = 8080;

// import pool object from db module that we just created
const { pool } = require("./db");

app.get("/", (req, res) => {
    res.send("Hello world!");
});

// GET - /users - get all users from PostgreSQL database
app.get("/users", async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM users");
        res.status(200).json(rows);
    } catch (error) {
        console.error(error.message);
    }
});

// GET - /users/:id - get a single user by ID from PostgreSQL database
app.get("/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error.message);
    }
});

// POST - /users - add a new user to PostgreSQL database
app.post("/users", async (req, res) => {
    const { name, email } = req.body;
    try {
        const { rows } = await pool.query(
            "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
            [name, email]
        );
        res.status(201).json(rows);
    } catch (error) {
        console.error(error.message);
    }
});

// PUT - /users/:id - update a user by ID in PostgreSQL database
app.put("/users/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const { rows } = await pool.query(
            "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
            [name, email, id]
        );
        res.status(200).json(rows);
    } catch (error) {
        console.error(error.message);
    }
});

// DELETE - /users/:id - delete a user by ID from PostgreSQL database
app.delete("/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
        // return remaining users
        res.status(200).json(rows);
    } catch (error) {
        console.error(error.message);
    }
});

// app.listen as an async function
const start = async () => {
    try {
        await pool.connect();
        console.log("Connected to PostgreSQL database");
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    } catch (error) {
        console.error(error.message);
    }
};

// start();

module.exports = app;