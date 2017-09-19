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
    }, {
      'id': '3',
      'branch': 'LG',
      'model': 'Nexus 5X',
      'color': 'Black',
      'price': '237€',
      'year': '2015',
      'img': 'http://cdn2.gsmarena.com/vv/bigpic/lg-nexus-5x-.jpg'
    }, {
      'id': '4',
      'branch': 'Samsung',
      'model': 'Galaxy S8 Active',
      'color': 'Black',
      'price': '937€',
      'year': '2017',
      'img': 'http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-active.jpg'
    }
  ]
};

describe('Test API REST', function() {

  it('/phone respond phone json ', function(done) {
    request(app).get('/phones').expect('Content-Type', 'application/json; charset=utf-8').expect(function(response) {
      expect(response.text).to.be.string(JSON.stringify(phones.phones));
    }).expect(200).end(done);
  });

});
