function productToOrderForm(product, buttonText, valSchema){

    this.productData = product;
    this.buttonText = buttonText;
    this.options = product.options;
    this.validationSchema = valSchema;
    return{
      initialValues: {
        qty: 0,
        option: '',
      },
      validationSchema: this.validationSchema,
      options: this.options,
      buttonText: this.buttonText,
      productData: this.productData

    }
}

export default productToOrderForm;
