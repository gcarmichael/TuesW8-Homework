var basket = {
  subtotal: 0,
  items: []
}

var item = {
  name: 'cheese',
  price: 5,
  bogof: false
}

var bogofItem = {
  name: 'milk',
  price: 2,
  bogof: true
}

module.exports = [basket, item, bogofItem];