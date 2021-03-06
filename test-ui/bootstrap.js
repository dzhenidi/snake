const puppeteer = require('puppeteer');
const { expect } = require('chai');
const pick = require('lodash.pick');
const globalVariables = pick(global, ['browser', 'expect']);
const { before, after } = require('mocha');

// puppeteer options
const opts = {
  headless: false,
  slowMo: 100,
  timeout: 10000
};

// expose variables
before (async function () {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});

// close browser and reset global variables
after (function () {
  global.browser.close();

  global.browser = globalVariables.browser;
  global.expect = globalVariables.expect;
});
