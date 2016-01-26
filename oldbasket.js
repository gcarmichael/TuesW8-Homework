var basket = require('./basket');
// var items = require('./items');
// var customers = require('./customers');
// var subtotal = require('./subtotal');
var assert = require('assert');


var items = require('./items');
var subtotal = require('./subtotal');
var customers = require('./customers');

var basket = {
  items: {items[0], items[1]},
  discount: function(){
    customers[0]
  },
  subtotal: function(){
    subtotal.calc();
  }
};

module.exports = basket;