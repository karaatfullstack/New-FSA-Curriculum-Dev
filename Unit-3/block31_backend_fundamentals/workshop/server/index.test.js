// import dependencies
const request = require('supertest');
const app = require('./index');

test('should return an index.html page with a "hello world" string in the h1 element', () => {
    // 200 response
    return request(app).get('/').then((response) => {
        expect(response.statusCode).toBe(200);
        //expect response to be html
        expect(response.headers['content-type']).toEqual(expect.stringContaining('html'));
        //expect response to contain the string "hello world"
        expect(response.text).toEqual(expect.stringContaining('HELLO WORLD'));
    });
});

test('should return all pets from the database', () => {
    // 200 response
    return request(app).get('/api/v1/pets').then((response) => {
        expect(response.statusCode).toBe(200);
        //expect response to be json
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        //expect response to contain the string "hello world"
        expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({ name: 'Rover' })]));
    });
});

test('should return a single pet from the database', () => {
    // 200 response
    return request(app).get('/api/v1/pets/1').then((response) => {
        expect(response.statusCode).toBe(200);
        // expect response to have a pet object with an id of 1
        expect(response.body).toEqual(expect.objectContaining({ id: 1 }));
        //expect response to have a pet object
        expect(response.body).toEqual(expect.objectContaining({ name: 'Fido' }));
    });
});



