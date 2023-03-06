// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.send(pets);
});

// get pet by id
app.get('/api/v1/pets/:id', (req, res) => {
    // get the id from the request params
    const id = req.params.id;
    // find the pet in the database
    const pet = pets.find((pet) => {
        return pet.id === parseInt(id);
    });
    console.log(pet);
    // send the pet as a response
    res.send(pet);
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;