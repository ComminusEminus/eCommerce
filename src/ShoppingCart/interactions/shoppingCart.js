import orderToShoppingCartItem from './orderToShoppingCartItem'
import cartItemToOrder from './cartItemToOrder'
import {selectOrderSchema} from '../../common/index';

function shoppingCart(){
  this.cart = [];
}

shoppingCart.prototype.getCurrentCart = function(){
  //get cart from storage and set this.cart to it
  const currentCart = localStorage.getItem('cart');
  if(currentCart){
    this.cart = JSON.parse(currentCart)
  }
  return this.cart;
}

shoppingCart.prototype.addItemToCart = function(cartItem){
  this.getCurrentCart()
  console.log(cartItem)
  const newCartItem = new orderToShoppingCartItem(cartItem)
  console.log(newCartItem)
  this.cart.push(newCartItem)
  this.setCurrentCart()
  return this.cart
}

shoppingCart.prototype.setCurrentCart = function(){
  localStorage.setItem('cart', JSON.stringify(this.cart))
}


shoppingCart.prototype.returnCart = function(){
  //get this.current in current state and return it
  const currentShoppingCart = this.getCurrentCart()
  return this.cart
}

shoppingCart.prototype.findCartItem = function(itemOrderId){
  this.getCurrentCart();
  console.log(itemOrderId)
  const orderItemLookUp = this.cart.find((element) => element.itemOrderId === itemOrderId)
  console.log(orderItemLookUp)
  const formMaterials = new cartItemToOrder(orderItemLookUp, "Update Cart", selectOrderSchema)
  return formMaterials
}

shoppingCart.prototype.updateCartItem = function(order){
  this.getCurrentCart()
  const replaceAtIndex = this.cart.findIndex((element) => element.itemOrderId == order[3]);
  const updatedProduct = new orderToShoppingCartItem([order[0], order[1]]);
  console.log(updatedProduct)
  this.cart.splice(replaceAtIndex, 1, updatedProduct)
  this.setCurrentCart()
  return this.cart;
}

shoppingCart.prototype.shoppingCartToPlaceOrderForm = function(){
  //get current shopping cart from local storage
  //bundle into object with : validationSchema initialValues buttonText
}

export default shoppingCart;
