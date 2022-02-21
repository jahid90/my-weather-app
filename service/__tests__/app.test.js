const supertest = require('supertest');

const server = require('../src/app');
const requestWithSupertest = supertest(server);

describe('Test endpoints', () => {
    it('GET /ping', async () => {
        const res = await requestWithSupertest.get('/ping');

        expect(res.status).toEqual(200);
        expect(res.text).toBe('"OK"');
    });
});
