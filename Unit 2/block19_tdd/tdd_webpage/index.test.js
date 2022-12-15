//import fs
const fs = require('fs');

// is there an index.html file?
test('index.html should exist', () => {
    expect(fs.existsSync('index.html')).toBe(true);
});

// does the index.html file contain the string "Hello World"?
test('index.html should contain the string "Hello World"', () => {
    const data = fs.readFileSync('index.html', 'utf8');
    expect(data).toContain('Hello World');
});

// does the index.js grab the div with the id of "root"?
test('index.js should grab the div with the id of "root"', () => {
    const data = fs.readFileSync('index.js', 'utf8');
    expect(data).toContain('getElementById("root")');
});

// does the index.js create a new h1 element that says "USERS"?
test('index.js should create a new h1 element that says "USERS"', () => {
    const data = fs.readFileSync('index.js', 'utf8');
    expect(data).toContain('createElement("h1")');
    expect(data).toContain('h1.innerHTML = "USERS"');
});

// does the index.js have a fetch request to the url "https://jsonplaceholder.typicode.com/users"?
test('index.js should have a fetch request to the url "https://jsonplaceholder.typicode.com/users"', () => {
    const data = fs.readFileSync('index.js', 'utf8');
    expect(data).toContain('fetch("https://jsonplaceholder.typicode.com/users")');
});

// is there data from the fetch request?
test('index.js should have data from the fetch request', () => {
    const read = fs.readFileSync('index.js', 'utf8');
    expect(read).toContain('response.json()');
});
