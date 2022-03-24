

const addToCartInitialValue = (values) => {
  const {qty, options, title, price} = values
  return {
    qty: qty,
    option: options[0],
    productName: title,
    productPrice: price
  }
}


export default addToCartInitialValue
