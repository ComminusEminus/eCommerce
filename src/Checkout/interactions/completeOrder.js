import {shoppingCart} from '../../ShoppingCart/index'

function completeOrder(){
  this.order = {};
  this.customerInformation = {}
}

completeOrder.prototype.clearCart = function(){
  localStorage.removeItem('cart');
}


completeOrder.prototype.buildOrder = function(customerInfo){
  const cart = new shoppingCart();
  const currentCart = cart.getCurrentCart()
  this.order = currentCart;
  this.customerInformation = customerInfo;
  return{
    order: this.order,
    customerInformation: [this.customerInformation]
  }
}

export default completeOrder;
