// init express app
const express = require('express');
const app = express();
const PORT  = 8080;

// import fs module
const fs = require('fs');

// import and use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// import and use cors
const cors = require('cors');
app.use(cors('*'));

// import data
const animals = require('./data.js');

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

// GET - api/v1/animals - get all animals
app.get('/api/v1/animals', (req, res) => {
    try {
        res.send(animals);
    } catch (err) {
        console.log(err);
    }
});

// GET - api/v1/animals/:id - get animal by id
app.get('/api/v1/animals/:id', (req, res) => {
    try {
        if(!req.params.id) {
            res.status(400).send('Please provide an id');
        }

        const id = req.params.id;
        const animal = animals.find(animal => animal.id === id);
        res.send(animal);   
    } catch (error) {
        console.log(error);
    }
});

// POST - api/v1/animals - add new animal
app.post('/api/v1/animals', (req, res) => {
    try {
        if(!req.body) {
            res.status(400).send('Please provide an animal');
        }

        if(!req.body.id || !req.body.name || !req.body.species || !req.body.diet || !req.body.weight || !req.body.location || !req.body.lifespan || !req.body.image) {
            res.status(400).send('Please provide all required fields');
        }

        const animal = req.body;
        animals.push(animal);
        res.send(animals);
    } catch (error) {
        console.log(error);
    }
});

// PUT - api/v1/animals/:id - update animal by id
app.put('/api/v1/animals/:id', (req, res) => {
    try {
        if(!req.body) {
            res.status(400).send('Please provide an animal');
        }

        if(!req.body.id || !req.body.name || !req.body.species || !req.body.diet || !req.body.weight || !req.body.location || !req.body.lifespan || !req.body.image) {
            res.status(400).send('Please provide all required fields');
        }
        const id = req.params.id;
        const animal = req.body;
        const index = animals.findIndex(animal => animal.id === id);
        animals[index] = animal;
        res.send(animals);
        
    } catch (error) {
        console.log(error);
    }
});

// DELETE - api/v1/animals/:id - delete animal by id
app.delete('/api/v1/animals/:id', (req, res) => {
    try {
        if(!req.params.id) {
            res.status(400).send('Please provide an id');
        }

        const id = req.params.id;
        const index = animals.findIndex(animal => animal.id === id);
        animals.splice(index, 1);
        res.send(animals);
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;