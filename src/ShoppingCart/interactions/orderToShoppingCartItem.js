function orderToShoppingCartItem(order){
  this.qty = order[0].qty;
  this.option = order[0].option;
  this.productData = order[1];
  this.price = order[1].price;
  this.title = order[1].title;
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
