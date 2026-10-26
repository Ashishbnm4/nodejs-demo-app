const request = require('supertest');
const app = require('../app');

describe('Node.js CI/CD Demo Application', () => {
    test('GET / should return the application message', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('success');
        expect(response.body.message).toBe(
            'Node.js CI/CD Pipeline is running!'
        );
    });

    test('GET /health should return healthy status', async () => {
        const response = await request(app).get('/health');

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('healthy');
    });
});
