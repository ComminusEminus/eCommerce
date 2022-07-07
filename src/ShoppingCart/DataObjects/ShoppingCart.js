import ProductOrder from '../../ProductOrder/DataObjects/ProductOrder'
import List from '../../common/BaseObjects/List'
function ShoppingCart(){
  List.call(this)
}
ShoppingCart.prototype = Object.create(List.prototype)

ShoppingCart.prototype.constructor= ShoppingCart;

ShoppingCart.prototype.addToCart = function(productOrder){
  if(this.list.some((element) => element.productOrderId == productOrder.productOrderId)){
    this.updateProduct(productOrder)
  }else{
    this.add(productOrder)
  }
  this.updateStorage()
}
ShoppingCart.prototype.updateProduct = function(productOrder){
  const newList = this.list.map((element) => {
    return (element.productOrderId == productOrder.productOrderId) ? element = productOrder : element
  })
  this.list = newList
}

ShoppingCart.prototype.removeFromCart = function(product){
  this.hydrateCart()
  this.remove(product.productOrderId ,'productOrderId')
  this.updateStorage()
  return this.list
}

ShoppingCart.prototype.hydrateCart = function(){
  let storedCart = localStorage.getItem('cart')

  if(!storedCart){
    return false
  }

  storedCart = JSON.parse(storedCart)

  let newCart = storedCart.map((element)=> {
    element = new ProductOrder(element)
    return element
  })

  this.list = newCart

  return this.list
}
ShoppingCart.prototype.getCart = function(){
  this.hydrateCart()

  return this.list
}
ShoppingCart.prototype.updateStorage = function(){
  localStorage.setItem('cart', JSON.stringify(this.list))
}
ShoppingCart.prototype.getLineTotals = function(){
  this.hydrateCart()
  let totals = this.list.map((elem) => {
    return elem.lineTotal()
  })
  return totals
}
ShoppingCart.prototype.calcTotal = function(){
  this.hydrateCart()
  let totals = this.getLineTotals()
  let orderTotal = totals.reduce((prev, curr) =>  prev + curr)
  return orderTotal
}





export default new ShoppingCart();
