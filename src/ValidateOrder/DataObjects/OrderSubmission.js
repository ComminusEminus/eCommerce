export default function OrderSubmission(customerInformation, shoppingCart){
  this.customerInformation = customerInformation
  this.shoppingCart = shoppingCart
  return {
    customerInformation,
    shoppingCart
  }
}
