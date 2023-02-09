// init express app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;

// body parser middleware
app.use(express.json());

// use body parser middleware
app.use(bodyParser.json());

// import data
const data = require('./data');

// import fs module
const fs = require('fs');

// GET route
app.get('/', (req, res) => {
    //use fs to server up the index.html in client folder
    fs.readFile('../client/index.html', (err, data) => {
        if (err) {
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

// GET - /api/jokes/:id - return a single joke from array of jokes
app.get('/api/jokes/:id', (req, res) => {
    try {
        const jokeId = req.params.id;

        if (jokeId > data.length || jokeId <= 0) {
            res
                .status(404)
                .json({ message: `The joke with the specified ID of ${jokeId} does not exist.` });
        }

        const joke = data.find((j) => j.id == jokeId);

        res.status(200).json(joke);
    } catch (error) {
        console.log(error);

    }
});

// POST - /api/jokes - add a new joke to an array of jokes and return the new array
app.post('/api/jokes', (req, res) => {
    try {
        const { joke } = req.body;
        if(!joke){
            return res.status(400).json({ err: 'joke is required' });
        }

        const newJoke = {
            id: data.length + 1,
            joke
        };
        data.push(newJoke);
        res.json(data);

    } catch (error) {
        console.log(error);
    }
});

// PUT - /api/jokes/:id - update a joke
app.put('/api/jokes/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { joke } = req.body;

        if(!joke){
            return res.status(400).json({ err: 'joke is required' });
        }

        const index = data.findIndex(j => j.id === parseInt(id));
        if(index === -1){
            return res.status(404).json({ err: 'joke not found' });
        }

        data[index].joke = joke;
        res.json(data[index]);

    } catch (error) {
        console.log(error);
    }
});

// DELETE - /api/jokes/:id - delete a joke
app.delete('/api/jokes/:id', (req, res) => {
    try {
        const { id } = req.params;
        const index = data.findIndex(j => j.id === parseInt(id));

        if(index === -1){
            return res.status(404).json({ err: 'joke not found' });
        }

        data.splice(index, 1);
        res.json(data);

    } catch (error) {
        console.log(error);
    }
});

// listen to port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});