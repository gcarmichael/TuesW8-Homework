var basket = {
  subtotal: 0,
  items: [item, bogofItem]
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