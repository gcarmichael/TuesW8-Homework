var basket = {
  items: [],
  subtotal: function(){
    var total = 0
    for(item of this.items){
      total += item.price;
    }
    return total;
  }
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