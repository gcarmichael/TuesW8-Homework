var basket = require('./basket')[0];
var item = require('./basket')[1];
var bogofItem = require('./basket')[2];
var assert = require('assert');

describe('Shopping basket', function(){
  it('should be empty to begin with', function(){
    assert.equal(0, basket.subtotal);
  })
});