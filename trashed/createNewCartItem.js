/*nst createNewCartItem = (id, title, qty, price, options) => {
  const total = () => {
    return price * parseInt(qty)
  }
  const generateOrderId = () => {
    return Math.random().toString(16).substr(2, 8);
  }
  return {
    orderId: generateOrderId(),
    id: id,
    title: title,
    qty: qty,
    price: price,
    options: options,
    total: total()
  }
}*/

export default CreateNewCartItem;
