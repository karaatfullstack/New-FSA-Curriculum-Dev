// import dependencies
const request = require('supertest');
const app = require('../server/index');

// test GET /users
describe('GET /users', () => {
    it('should return 200 OK', () => {
        return request(app)
            .get('/users')
            .expect(200)
    })
})

// test GET /users/:id
describe('GET /users/:id', () => {
    it('should return 200 OK', () => {
        return request(app)
            .get('/users/1')
            .expect(200)
    })
})

// test POST /users
describe('POST /users', () => {
    it('should return 201 OK', () => {
        return request(app)
            .post('/users')
            .send({ name: 'Instructor', email: 'fullstack@email.com' })
            .expect(201)
    })
})

// test PUT /users/:id
describe('PUT /users/:id', () => {
    it('should return 200 OK', () => {
        return request(app)
            .put('/users/4')
            .send({ name: 'Chris', email: 'fullstackacademy@email.com' })
            .expect(200)
    })
})

// test DELETE /users/:id
describe('DELETE /users/:id', () => {
    it('should return 200 OK', () => {
        return request(app)
            .delete('/users/4')
            .expect(200)
    })
})