var basket = {
  items: [],
  discount: false,
  subtotal: function(){
    var total = 0
    for(item of this.items){
      if(item.bogof === true){
        item.quantity = (item.quantity / 2)
      }
      total += (item.price * item.quantity);
    }

    if(total >= 20){
      total = (total * 0.9);
    }

    if(this.discount === true){
      total = (total * 0.95);
    }

    return total;
    
  }
}

var item = {
  name: 'cheese',
  price: 5,
  quantity: 1,
  bogof: false
}

var bogofItem = {
  name: 'milk',
  price: 2,
  quantity: 1,
  bogof: true
}

module.exports = [basket, item, bogofItem];