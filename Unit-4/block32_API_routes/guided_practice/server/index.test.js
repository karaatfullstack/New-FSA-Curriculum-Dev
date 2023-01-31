// import dependencies
const request = require('supertest');
const app = require('../server/index.js');

// test GET route to render a homepage
test('GET /', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);

    // test that the response is HTML
    expect(response.headers['content-type']).toEqual(expect.stringContaining('text/html'));

    // test that the response contains the word 'API Routes'
    expect(response.text).toEqual(expect.stringContaining('API Routes'));
});

// test GET route to get all animals
test('GET /api/v1/animals', async () => {
    const response = await request(app).get('/api/v1/animals');
    expect(response.statusCode).toBe(200);

    // test that the response is JSON
    expect(response.headers['content-type']).toEqual(expect.stringContaining('application/json'));

    // test that the response contains the word 'lion'
    expect(response.text).toEqual(expect.stringContaining('Lion'));
});

// test GET route to get animal by id
test('GET /api/v1/animals/:id', async () => {
    const response = await request(app).get('/api/v1/animals/1');
    expect(response.statusCode).toBe(200);

    // test that the response is JSON
    expect(response.headers['content-type']).toEqual(expect.stringContaining('application/json'));

    // test that the response contains the word 'lion'
    expect(response.text).toEqual(expect.stringContaining('Lion'));
});

// test POST route to add new animal
test('POST /api/v1/animals', async () => {
    const response = await request(app).post('/api/v1/animals').send({
        id: '5',
        name: 'Tiger',
        type: 'Mammal',
        imageUrl: 'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/t/tiger_thumb.ngsversion.1484108244670.adapt.1900.1.jpg'
    });
    expect(response.statusCode).toBe(200);

    // test that the response is JSON
    expect(response.headers['content-type']).toEqual(expect.stringContaining('application/json'));

    // test that the response contains the word 'Tiger'
    expect(response.text).toEqual(expect.stringContaining('Tiger'));
});

// test PUT route to update animal by id
test('PUT /api/v1/animals/:id', async () => {
    const response = await request(app).put('/api/v1/animals/5').send({
        id: '5',
        name: 'Tiger',
        type: 'Mammal',
        imageUrl: 'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/t/tiger_thumb.ngsversion.1484108244670.adapt.1900.1.jpg'
    });
    expect(response.statusCode).toBe(200);

    // test that the response is JSON
    expect(response.headers['content-type']).toEqual(expect.stringContaining('application/json'));

    // test that the response contains the word 'Tiger'
    expect(response.text).toEqual(expect.stringContaining('Tiger'));
});

// test DELETE route to delete animal by id
test('DELETE /api/v1/animals/:id', async () => {
    const response = await request(app).delete('/api/v1/animals/5');
    expect(response.statusCode).toBe(200);

    // test that the response is JSON
    expect(response.headers['content-type']).toEqual(expect.stringContaining('application/json'));

    // test that the response contains the word 'Tiger'
    expect(response.text).toEqual(expect.stringContaining('Tiger'));
});