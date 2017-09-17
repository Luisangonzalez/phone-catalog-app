const request = require('supertest');

const app = require('../../dist/app').app;

const expect = require('chai').expect;


describe('Verify call to troy to subscription fanpage', function() {

  it('No query params', function(done) {
    request(app).get('/api')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(function(response) {
        expect(response.text).to.have.string('hello world');
      }).expect(200).end(done);
  });

});
