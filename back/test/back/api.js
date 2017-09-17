const request = require('supertest');

const app = require('../../dist/app').app;

const expect = require('chai').expect;

var phones = {
  phones: [
    {
      'id': '1',
      'branch': 'Apple',
      'model': 'iPhone X',
      'color': 'black',
      'price': '1000€',
      'year': '2017',
      'img': 'http://cdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg'
    }, {
      'id': '2',
      'branch': 'Xiaomi',
      'model': ' Mi A1 (5X)',
      'color': 'gold',
      'price': '177€',
      'year': '2017',
      'img': 'http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi-a1.jpg'
    }
  ]
};

describe('Test API REST', function() {

  it('/phone respond phone json ', function(done) {
    request(app).get('/phones').expect('Content-Type', 'application/json; charset=utf-8').expect(function(response) {
      expect(response.text).to.be.string(JSON.stringify(phones));
    }).expect(200).end(done);
  });

});
