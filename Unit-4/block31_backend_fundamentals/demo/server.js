const students = require('./data');

const express = require('express');

// express app setup
const app = express();

const PORT = 8080;

// server index.html
app.use(express.static('public'));

// SECTION FOR DEMONSTRATING FUNDAMENTALS

// GET - / - returns homepage
app.get('/', (req, res) => {
    // server up the index.html
    res.sendFile(__dirname + '/index.html');
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// dynamic route
app.get('/api/:string', (req, res) => {
    const { string } = req.params;
    res.send(`Returning any test as a - ${string}`);
});

// query route
app.get('/api/query', (req, res) => {
    const { query } = req.query;
    res.send(`Returning any test as a - ${query}`);
});

// dynamic route with query
app.get('/api/:string/query', (req, res) => {
    const { string } = req.params;
    const { query } = req.query;
    res.send(`Returning any test as a - ${string} with query - ${query}`);
});

// SECTION FOR DEMONSTRATING API ROUTES WITH DATA.JS

// GET all students route
app.get('/api/v1/students', (req, res) => {
    console.log(students);
    res.send(students);
});

// GET student by id route
app.get('/api/v1/students/:id', (req, res) => {
    const { id } = req.params;
    const student = students.find(student => student.id === parseInt(id));
    res.send(student);
});

// GET student by name route
app.get('/api/v1/students/name/:name', (req, res) => {
    const { name } = req.params;
    const student = students.find(student => student.name === name);
    res.send(student);
});

// GET student by teacher route
app.get('/api/v1/students/teacher/:teacher', (req, res) => {
    const { teacher } = req.params;
    const student = students.find(student => student.teacher === teacher);
    res.send(student);
});

// GET student by age route
app.get('/api/v1/students/age/:age', (req, res) => {
    const { age } = req.params;
    const student = students.find(student => student.age === parseInt(age));
    res.send(student);
});

// GET student by age and teacher route
app.get('/api/v1/students/:age/:teacher', (req, res) => {
    const { age, teacher } = req.params;
    const student = students.find(student => student.age === parseInt(age) && student.teacher === teacher);
    res.send(student);
});

// start server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});