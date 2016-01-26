var basket = require('./basket')[0];
var item = require('./basket')[1];
var bogofItem = require('./basket')[2];
var assert = require('assert');

describe('Shopping basket', function(){
  it('should be empty to begin with', function(){
    basket.items = [];
    assert.equal(0, basket.subtotal());
  });
  it('should contain multiple items', function(){
    basket.items = [item, item];
    assert.equal(2, basket.items.length);
  });
  it('should have a correct subtotal', function(){
    assert.equal(10, basket.subtotal());
  });
  it('should provide a 10% discount on subtotals on or over £20', function(){
    basket.items = [];
    basket.items = [item, item, item, item];
    assert.equal(18, basket.subtotal());
  });
  it('should provide a 5% discount if the customer has a discount card', function(){
    basket.items = [];
    basket.items = [item];
    basket.discount = true;
    assert.equal(4.75, basket.subtotal());
    basket.discount = false;
  });
  it('should work for bogof items', function(){
    basket.items = [];
    basket.items = [bogofItem];
    bogofItem.quantity = 4;
    assert.equal(4, basket.subtotal());
    // Todo: Account for odd quantity (try Math.floor();)
  })
});