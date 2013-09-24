var assert = require('assert');
var wdQuery = require('../index.js');

describe('wd-query', function () {

  describe('injected browser executing a Google Search', function () {
    var browser, $;

    before(function(){
      browser = this.browser;
      $ = wdQuery(browser);
    });

    it('performs as expected', function (done) {
      browser.get('http://google.com')
        .then(function () {
          return $('input[name=q]').val('webdriver');
        })
        .then(function () {
          return $('input[name=q]').val();
        })
        .then(function (val) {
          return assert.equal(val, 'webdriver');
        })
        .then(function(){
          return $('body').isVisible();
        })
        .then(function(isVisible){
          assert.ok(isVisible);
          done();
        });
    });
  });
});
