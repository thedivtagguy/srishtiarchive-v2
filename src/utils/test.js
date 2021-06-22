const request = require('supertest');
const expect = require('expect');
const {app} = require('../utils/server');

describe('GET /Device', () => {
  it('Should return an array of devices', (done) => {
    request(app)
      .get('/devices')
      .expect((res) => {
        expect(res.body).toBeAn('array').toInclude('iPad')
      })
      .end(done);
  });
});

describe('POST /screen', function() {
  this.timeout(10000);
  it('content-type should equal image/png', (done) => {
    request(app)
      .post('/screen')
      .send('site=https://www.google.com')
      .send('device=iPad')
      .expect('Content-Type', 'image/png')
      .end(done);
    });
});