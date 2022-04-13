function cartItemToOrder(cartItem, buttonText, valSchema){
  this.productData = cartItem.productData;
  this.buttonText = buttonText;
  this.options = cartItem.productData.options;
  this.validationSchema = valSchema;
  this.itemOrderId = cartItem.itemOrderId
  return{
    initialValues:{
      qty: cartItem.qty,
      option: cartItem.option,
    },
    validationSchema: this.validationSchema,
    options: this.options,
    buttonText: this.buttonText,
    productData: this.productData
  }

}

export default cartItemToOrder;
