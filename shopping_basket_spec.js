var basket = require('./basket')[0];
var item = require('./basket')[1];
var bogofItem = require('./basket')[2];
var assert = require('assert');

describe('Shopping basket', function(){
  it('should be empty to begin with', function(){
    basket.items = [];
    assert.equal(0, basket.subtotal());
  })
  it('should contain multiple items', function(){
    basket.items = [item, bogofItem];
    assert.equal(2, basket.items.length);
  })
  it('should have a correct subtotal', function(){
    assert.equal(7, basket.subtotal());
  })
});