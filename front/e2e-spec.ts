'use strict'; // necessary for es6 output in node

let browser = require('protractor').browser;
let element = require('protractor').element;
let by = require('protractor').by;
// import { browser, element, by } from ;

describe('QuickStart E2E Tests', function () {

  let expectedTitle = 'Phone Catalog App';

  beforeEach(function () {
    browser.get('http://localhost:8080');
  });

  it(`should display: ${expectedTitle}`, function () {
    expect(element(by.css('.mdl-layout-title')).getText()).toEqual(expectedTitle);
  });

  it('should display an image', function () {
    expect(element(by.css('img')).isPresent()).toBe(true);
  });

});
