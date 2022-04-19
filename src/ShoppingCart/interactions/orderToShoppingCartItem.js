function orderToShoppingCartItem(values, product){
  this.qty = values.qty;
  this.option = values.option;
  this.productData = product;
  this.price = product.price;
  this.title = product.title;
  this.lineTotal = this.price * this.qty;
  this.itemOrderId = Math.random().toString(16).substr(2, 8);
  return{
    itemOrderId: this.itemOrderId,
    qty: this.qty,
    option: this.option,
    lineTotal: this.lineTotal,
    title: this.title,
    price: this.price,
    productData: this.productData
  }
}



export default orderToShoppingCartItem;
