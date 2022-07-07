import ProductOrder from '../../ProductOrder/DataObjects/ProductOrder'

export default function Product(object){
  this.id = object._id
  this.title = object.title
  this.description = object.description
  this.price = object.price
  this.options = object.options
  this.tags = object.tags
}

Product.prototype.getOrderValues = function(){
  let [optionTitle] = Object.keys(this.options)
  let optionArray = Object.values(this.options)
  let productId = this.id
  let price = this.price
  let productTitle = this.title
  return {optionTitle, optionArray, productId, price, productTitle}
}
Product.prototype.createProductOrder = function(){
  let orderValues = this.getOrderValues()
  return new ProductOrder(orderValues)
}
