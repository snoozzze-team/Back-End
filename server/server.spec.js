const request = require('supertest');

const server = require('./server.js');

describe('POST /api/auth/register', () => {
    it('should be able to add user to database', async () => {
        return response = await request(server)
            .post('/api/auth/register')
            .send({
                email: `testemail@test.com${Date.now()}`,
                username: `testuser${Date.now()}`,
                password: "test"
            })
            .then(response => {
                expect(response.status).toBe(201);
            })
    });

    it('must fail validation without both username and password', () => {
        return request(server)
            .post('/api/auth/register')
            .send({
                username: 'testing'
            })
            .then(response => {
                expect(response.status).toBe(400);
            })
    });
});


describe('POST /api/auth/login', () => {
    it('should be able to log in', async () => {
        return response = await request(server)
            .post('/api/auth/login')
            .send({
                username: "testuser1",
                password: "test"
            })
            .then(response => {
                expect(response.status).toBe(200);
            })
    });

    it('should return a user token', async () => {
        const response = await request(server)
            .post('/api/auth/login')
            .send({
                username: "testuser1",
                password: "test"
            })
        expect(response.body.token).toBeTruthy();
    });
});

describe('GET /api/users', () => {
    it('should return 200 http status code', () => {
        return request(server)
            .get('/api/users')
            .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ0YXJhbm1uZWVsZEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InRhcmFubiIsImlhdCI6MTU3MTg3MTgxMH0.60uvr5yCakZCNFjRe39bTCoSpLXP_mAuSGw2zQ3PI5A')
            .then(response => {
                expect(response.status).toBe(200);
            })
    });

    it('should return JSON object', async () => {
        const response = await request(server)
            .get('/api/users');
        expect(response.type).toMatch(/json/i);
    })
});

describe('POST /api/users/sleepdata', () => {
    it('should return 201 http status code', () => {
        return request(server)
            .post('/api/users/sleepdata')
            .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ0YXJhbm1uZWVsZEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InRhcmFubiIsImlhdCI6MTU3MTg3MTgxMH0.60uvr5yCakZCNFjRe39bTCoSpLXP_mAuSGw2zQ3PI5A')
            .send({
                dateTimeFrom: "2019-10-22T23:00",
                dateTimeTo: "2019-10-23T08:00",
                feels: "4",
                notes: "fantastic"
            })
            .then(response => {
                expect(response.status).toBe(201);
            })
    });
})

describe('GET /api/users/sleepdata', () => {
    it('should return 200 http status code', () => {
        return request(server)
            .get('/api/users/sleepdata')
            .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ0YXJhbm1uZWVsZEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InRhcmFubiIsImlhdCI6MTU3MTg3MTgxMH0.60uvr5yCakZCNFjRe39bTCoSpLXP_mAuSGw2zQ3PI5A')
            .then(response => {
                expect(response.status).toBe(200);
            })
    });
})

describe('PUT /api/users/sleepdata/:id', () => {
    it('should return 200 http status code', () => {
        return request(server)
            .put('/api/users/sleepdata/:id')
            .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ0YXJhbm1uZWVsZEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InRhcmFubiIsImlhdCI6MTU3MTg3MTgxMH0.60uvr5yCakZCNFjRe39bTCoSpLXP_mAuSGw2zQ3PI5A')
            .send({
                dateTimeFrom: "2019-10-22T23:00",
                dateTimeTo: "2019-10-23T08:00",
                feels: "1",
                notes: "bad"
            })
            .then(response => {
                expect(response.status).toBe(200);
            })
    });
})
