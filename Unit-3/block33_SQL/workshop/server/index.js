const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const { pool } = require("./db");

const PORT = process.env.PORT || 8080;

// MIDDLEWARE
app.use(express.json()); //req.body
app.use(cors());


// ROUTES

// register and login routes
app.use("/auth", require("./routes/jwtAuth"));

// dashboard route
app.use("/dashboard", require("./routes/dashboard"));


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

start();