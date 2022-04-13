function ShoppingCart(){
  this.cart = [];
}
ShoppingCart.prototype.addItem = function(cartItem){
  this.getCurrentCart()
  this.cart.push(cartItem)
  this.setCurrentCart()
}
ShoppingCart.prototype.getCurrentCart = function(){
  const currentCart = localStorage.getItem('cart');
  if(currentCart){
    this.cart = JSON.parse(currentCart)
  }
}
ShoppingCart.prototype.returnCurrentCart = function(){
  this.getCurrentCart();
  return this.cart;
}
ShoppingCart.prototype.setCurrentCart = function(){
  localStorage.setItem('cart', JSON.stringify(this.cart))
}
//test later if they point to the same place in memory
ShoppingCart.prototype.findItem = function(orderId){
  this.getCurrentCart()
  const locateItem = this.cart.find(item => item.orderId == orderId);
  if(locateItem){
    return locateItem
  }else{
    return false
  }
}
ShoppingCart.prototype.updateCartItem = function(orderId, update){
  const item = this.findItem(orderId);
  if(item){
    Object.assign(this.cart, update);
    this.setCurrentCart()
  }else{
    return false
  }
}
ShoppingCart.prototype.removeItem = function(itemId){
  this.getCurrentCart()
  const updatedCart = this.cart.filter(element => element != itemId);
  this.cart = updatedCart;
  this.setCurrentCart();

}
ShoppingCart.prototype.removeItem = function(itemId){
  this.getCurrentCart()
  const updatedCart = this.cart.filter(element => element != itemId);
  this.cart = updatedCart;
  this.setCurrentCart();

}
ShoppingCart.prototype.cartItemAdapter = function(orderId){
  const item = this.findItem(orderId);
  return{
    id: cartItem.orderId,
    selectOption: cartItem.option,
    qty: cartItem.qty,
  }
}
export default ShoppingCart;
