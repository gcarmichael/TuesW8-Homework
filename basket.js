var basket = {
  items: [],
  discount: false,
  subtotal: function(){
    var total = 0
    for(item of this.items){
      total += item.price;
    }

    if(total >= 20){
      total = (total * 0.9);
    }

    if(this.discount === true){
      total = (total * 0.95);
    }

    return total;

    // if(this.subtotal >= 20){
    //   this.subtotal = (this.subtotal * 0.9);
    // }

    // if(this.discount === true){
    //   this.subtotal = (this.subtotal * 0.95);
    // }

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