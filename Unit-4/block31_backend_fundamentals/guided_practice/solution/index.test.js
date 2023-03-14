// import dendencies
const request = require('supertest');
const app = require('./index');

// test for the root route
test('should return and index.html page with a "hello world" string in the h1 element', () => {
    return request(app).get('/').then((response) => {
        expect(response.statusCode).toBe(200);
        //expect response to be html
        expect(response.headers['content-type']).toEqual(expect.stringContaining('html'));
        //expect response to contain the string "hello world"
        expect(response.text).toEqual(expect.stringContaining('HELLO WORLD'));
    });
});

// test for the /hello route
test('should return a "Hello World!" as a response', () => {
    return request(app).get('/hello').then((response) => {
        expect(response.statusCode).toBe(200);
        //expect response say "Hello World!"
        expect(response.text).toEqual('Hello World!');
    });
});

// test for the /hello/:name route
test('should return a "Hello <name>!" as a response', () => {
    return request(app).get('/hello/John').then((response) => {
        expect(response.statusCode).toBe(200);
        //expect response say "Hello John!"
        expect(response.text).toEqual('Hello John');
    });
});

// test for the /hello/:name/:age route
test('should return a "Hello <name>, you are <age> years old" as a response', () => {
    return request(app).get('/hello/John/30').then((response) => {
        expect(response.statusCode).toBe(200);
        //expect response say "Hello John, you are 30 years old!"
        expect(response.text).toEqual('Hello John, you are 30 years old');
    });
});

// test for the /hello?name=<name> route
test('should return a "Hello <name>!" as a response', () => {
    return request(app).get('/hello-query?name=John').then((response) => {
        expect(response.statusCode).toBe(200);
        //expect response say "Hello John!"
        expect(response.text).toEqual('Hello John');
    });
});
