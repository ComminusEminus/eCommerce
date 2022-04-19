import orderToShoppingCartItem from './orderToShoppingCartItem'
import cartItemToOrder from './cartItemToOrder'
import {selectOrderSchema} from '../../common/index';

function shoppingCart(){
  this.cart = [];
}

shoppingCart.prototype.getCurrentCart = function(){
  const currentCart = localStorage.getItem('cart');
  if(currentCart){
    this.cart = JSON.parse(currentCart)
  }
  return this.cart;
}

shoppingCart.prototype.addItemToCart = function(values, product){
  this.getCurrentCart()
  const newCartItem = new orderToShoppingCartItem(values, product)
  this.cart.push(newCartItem)
  this.setCurrentCart()
  return this.cart
}

shoppingCart.prototype.setCurrentCart = function(){
  localStorage.setItem('cart', JSON.stringify(this.cart))
}


shoppingCart.prototype.returnCart = function(){
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


shoppingCart.prototype.updateCartItem = function(values, product, id){
  const currentCart = this.getCurrentCart()
  const replaceAtIndex = currentCart.findIndex((element) => element.itemOrderId == id);
  const updatedProduct = new orderToShoppingCartItem(values, product);
  console.log(updatedProduct)
  currentCart.splice(replaceAtIndex, 1, updatedProduct)
  this.setCurrentCart()
  return this.cart;
}

shoppingCart.prototype.removeCartItem = function(id){
  const currentCart = this.getCurrentCart()
  const removeAtIndex = currentCart.findIndex((element) => element.itemOrderId == id);
  currentCart.splice(removeAtIndex, 1)
  this.setCurrentCart()
  return this.cart
}
export default shoppingCart;
