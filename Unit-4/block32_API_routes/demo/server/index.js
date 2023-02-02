// init express app
const express = require('express');
const app = express();
const PORT  = 8080;

// import data
const data = require('./data');

// import fs module
const fs = require('fs');

// GET route
app.get('/', (req, res) => {
    //use fs to server up the index.html in client folder
    fs.readFile('../client/index.html', (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.send(data.toString());
        }
    });
});

// GET - /api/jokes - return all jokes
app.get('/api/jokes', (req, res) => {
    try {
        res.send(data);
    } catch (error) {
        console.log(error);
    }
});

// GET - /api/jokes/:id - return a single joke
app.get('/api/jokes/:id', (req, res) => {
    try {
        const id = req.params.id;
        const joke = data.find(joke => joke.id === id);
        res.send(joke);
    } catch (error) {
        console.log(error);
    }
});

// POST - /api/jokes - create a new joke
app.post('/api/jokes', (req, res) => {
    try {
        const newJoke = req.body;
        data.push(newJoke);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
});

// PUT - /api/jokes/:id - update a joke
app.put('/api/jokes/:id', (req, res) => {
    try {
        const id = req.params.id;
        const updatedJoke = req.body;
        const joke = data.find(joke => joke.id === id);
        joke.joke = updatedJoke.joke;
        res.send(data);
    } catch (error) {
        console.log(error);
    }
});

// DELETE - /api/jokes/:id - delete a joke
app.delete('/api/jokes/:id', (req, res) => {
    try {
        const id = req.params.id;
        const joke = data.find(joke => joke.id === id);
        const index = data.indexOf(joke);
        data.splice(index, 1);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
});

// listen to port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});