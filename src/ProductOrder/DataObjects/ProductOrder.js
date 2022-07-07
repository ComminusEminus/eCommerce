import productOrderSchema from '../Schemas/productOrderSchema'
import FormInstance from '../../common/BaseObjects/FormInstance'

export default function ProductOrder(productValues){
  FormInstance.call(this, productOrderSchema)
  this.qty = productValues.qty || 0
  this.option = (!productValues.option)? productValues.optionArray[0] : productValues.option
  this.optionArray = productValues.optionArray
  this.optionTitle = productValues.optionTitle
  this.productOrderId = productValues.productOrderId || Math.floor(100000 + Math.random() * 900000)
  this.productId = productValues.productId
  this.price = productValues.price
  this.productTitle = productValues.productTitle
}

ProductOrder.prototype = Object.create(FormInstance.prototype)

ProductOrder.prototype.constructor= ProductOrder;

ProductOrder.prototype.getFormValues = function(){
  let qty = this.qty
  let option = this.option
  return {qty, option}
}

ProductOrder.prototype.updateOrder = function(newValues){
  this.qty = newValues.qty
  this.option = newValues.option
  return this
}
ProductOrder.prototype.lineTotal = function(){
  return this.qty * this.price
}
