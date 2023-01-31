const express = require('express');
const app = express();

const PORT = 8000 || 8080;

app.get('/', (req, res) => {
    // server up the index.html
    res.sendFile(__dirname + '/index.html');
});

// HELLO WORLD endpoint
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

// dynamic endpoint
app.get('/hello/:name', (req, res) => {
    // get the name from the request
    const name = req.params.name;
    // send a response
    res.send(`Hello ${name}`);
});

// dynamic endpoint with two params
app.get('/hello/:name/:age', (req, res) => {
    // get the name from the request
    const name = req.params.name;
    const age = req.params.age;
    // send a response
    res.send(`Hello ${name}, you are ${age} years old`);
});

// dynamic endpoint with query string
app.get('/hello-query', (req, res) => {
    // get the name from the request
    const name = req.query.name;
    // send a response
    res.send(`Hello ${name}`);
});

// show port number in console
// commented out for testing
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;