// import supertest and app
const request = require('supertest');
const app = require('./index.js');

// test the GET /articles route
describe('GET /articles', () => {
    it('should return 200 OK', () => {
        return request(app)
            .get('/articles')
            .expect(200);
    });

    it('should return an array of articles', () => {
        return request(app)
            .get('/articles')
            .then((response) => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(3);
            });
    });

    it('should return an array of articles with the correct fields', () => {
        return request(app)
            .get('/articles')
            .then((response) => {
                response.body.forEach((article) => {
                    expect(article).toHaveProperty('id');
                    expect(article).toHaveProperty('title');
                });
            });
    });

    it('should not allow POST without token', () => {
        return request(app)
            .post('/articles')
            .send({ title: 'test' })
            .expect(401);
    });
});

// test the POST /login route
describe('POST /login', () => {
    it('should return 200 OK', () => {
        return request(app)
            .post('/login')
            .send({ username: 'janedoe', password: '123' })
            .expect(200);
    });

    it('should return a token', () => {
        return request(app)
            .post('/login')
            .send({ username: 'janedoe', password: '123' })
            .then((response) => {
                expect(response.body).toHaveProperty('token');
            });
    });

    it('should return a token with the correct fields', () => {
        return request(app)
            .post('/login')
            .send({ username: 'janedoe', password: '123' })
            .then((response) => {
                expect(response.body.token).toBeTruthy();
            });
    });

    it('should not login with wrong password', () => {
        return request(app)
            .post('/login')
            .send({ username: 'johndoe', password: 'wrong' })
            .expect(422);
    });
});