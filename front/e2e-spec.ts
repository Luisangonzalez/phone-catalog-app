'use strict';

let browser = require('protractor').browser;
let element = require('protractor').element;
let by = require('protractor').by;

describe('Test catalog phone App', function () {

  let expectedTitle = 'Phone Catalog App';
  let expectedSlideMenuTitle = 'Select device';

  beforeEach(function () {
    browser.get('http://localhost:8080');
    browser.driver.manage().window().maximize();
  });

  it(`should display: ${expectedTitle}`, function () {
    expect($('[data-element="header-title"]').getText()).toEqual(expectedTitle);
  });

  it(`test click in menu and display: ${expectedSlideMenuTitle}`, function () {
    $('.mdl-layout__drawer-button').click();
    expect($('[data-element="slide-menu-title"]').getText()).toEqual(expectedSlideMenuTitle);
  });

});
