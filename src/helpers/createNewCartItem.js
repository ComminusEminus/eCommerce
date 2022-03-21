const createNewCartItem = (item, qty, price, options) => {
  const total = () => {
    return price * parseInt(qty)
  }
  const generateOrderId = () => {
    return Math.random().toString(16).substr(2, 8);
  }
  return {
    id: generateOrderId(),
    item: item,
    qty: qty,
    price: price,
    options: options,
    total: total()
  }
}

export default createNewCartItem;
