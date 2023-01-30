// import dependencies
const request = require('supertest');
const app = require('../server/index');

// is port 8080 available?
describe('Server', () => {
    it('should listen on port 8080', () => {
        return request(app)
            .get('/')
            .expect(200)
    })
    it('should return 404 for unknown routes', () => {
        return request(app)
            .get('/unknown')
            .expect(404)
    })
})

// test GET /users
describe('GET /users', () => {
    it('should return 200 OK', () => {
        return request(app)
            .get('/users')
            .expect(200)
    })
    it('should return an rows of users as an array', () => {
        return request(app)
            .get('/users')
            .then((res) => {
                expect(res.body).toEqual(expect.any(Array))
            })
    })

    it('should return an array of users with the correct properties', () => {
        return request(app)
            .get('/users')
            .then((res) => {
                expect(res.body[0]).toHaveProperty('id')
                expect(res.body[0]).toHaveProperty('name')
                expect(res.body[0]).toHaveProperty('email')
            })
    })

    it('should return an array of users with the correct values', () => {
        return request(app)
            .get('/users')
            .then((res) => {
                expect(res.body[0].id).toEqual(1)
                expect(res.body[0].name).toEqual('user1')
                expect(res.body[0].email).toEqual('user1@mail.com')

                expect(res.body[1].id).toEqual(2)
                expect(res.body[1].name).toEqual('user2')
                expect(res.body[1].email).toEqual('user2@mail.com')

                expect(res.body[2].id).toEqual(3)
                expect(res.body[2].name).toEqual('user3')
                expect(res.body[2].email).toEqual('user3@mail.com')
            })
    })
})

// test GET /users/:id
describe('GET /users/:id', () => {
    it('should return 200 OK', () => {
        return request(app)
            .get('/users/1')
            .expect(200)
    })
    it('should return a single user as an object', () => {
        return request(app)
            .get('/users/1')
            .then((res) => {
                expect(res.body).toEqual(expect.any(Object))
            })
    })

    it('should return a user to be an array with id, email, and name', () => {
        return request(app)
            .get('/users/1')
            .then((res) => {
                expect(res.body).toEqual(expect.any(Array))
                expect(res.body[0]).toHaveProperty('id')
                expect(res.body[0]).toHaveProperty('name')
                expect(res.body[0]).toHaveProperty('email')
            })
    })

    it('should return a user with the correct values', () => {
        return request(app)
            .get('/users/1')
            .then((res) => {
                expect(res.body[0].id).toEqual(1)
                expect(res.body[0].name).toEqual('user1')
                expect(res.body[0].email).toEqual('user1@mail.com')
            })
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

    it('should return the newly created user', () => {
        return request(app)
            .post('/users')
            .send({ name: 'Instructor', email: 'fullstack@email.com' })
            .then((res) => {
                expect(res.body).toEqual(expect.any(Array))
                expect(res.body[0]).toHaveProperty('id')
                expect(res.body[0]).toHaveProperty('name')
                expect(res.body[0]).toHaveProperty('email')
            })
    })

    it('should return the newly created user with the correct values', () => {
        return request(app)
            .post('/users')
            .send({ name: 'Instructor', email: 'fullstacktest@email.com' })
            .then((res) => {
                expect(res.body[0].name).toEqual('Instructor')
                expect(res.body[0].email).toEqual('fullstacktest@email.com')
            })
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

    // it('should return the updated user', () => {
    //     return request(app)
    //         .put('/users/4')
    //         .send({ name: 'updated', email: 'updated@mail.com' })
    //         .then((res) => {
    //             expect(res.body).toEqual(expect.any(Array))
    //             expect(res.body[0]).toHaveProperty('id')
    //             expect(res.body[0]).toHaveProperty('name')
    //             expect(res.body[0]).toHaveProperty('email')
    //         })
    //     })
})

// test DELETE /users/:id
describe('DELETE /users/:id', () => {
    it('should return 200 OK', () => {
        return request(app)
            .delete('/users/4')
            .expect(200)
    })

    it('should return the id, name, and email of the deleted user', () => {
        return request(app)
            .delete('/users/4')
            .then((res) => {
                expect(res.body).toEqual(expect.any(Array))
                expect(res.body[0]).toHaveProperty('id')
                expect(res.body[0]).toHaveProperty('name')
                expect(res.body[0]).toHaveProperty('email')
            })
    })
})