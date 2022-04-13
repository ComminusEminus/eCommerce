function CartItem(initialValues, values){
  this.id = initialValues.id;
  this.qty = values.qty;
  this.selectedOption = values.option;
  this.options = initialValues.option
  this.price = values.price
  this.title = initialValues.title
  this.orderId = function(){
    return Math.random().toString(16).substr(2, 8);
  };
  this.total = function(){
    return this.qty * this.price;
  };
}

CartItem.prototype.returnCartItem = function(){
  return{
    metaData: {
      id: this.id,
      option: this.options,
      price: this.price,
      title: this.title
    },
    qty: this.qty,
    option: this.selectedOption,
    orderId: this.orderId(),
    total: this.total()
  };
}


CartItem.prototype.stringifyCartItem = function(){
  const ci = this.returnCartItem();
  return JSON.stringify(ci);
}

export default CartItem;
