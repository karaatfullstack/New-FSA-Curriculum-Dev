// init express app
const express = require('express');
const app = express();
const PORT  = 8080;

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});