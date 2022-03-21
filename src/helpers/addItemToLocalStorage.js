import createNewCartItem from './createNewCartItem'

const addItemToLocalStorage = (item, qty, price, options) => {
  const newCartItem = createNewCartItem(item, qty, price, options)
  const currentCartItems = localStorage.getItem("cart")
  if(!currentCartItems){
    const stringifyCartItem = JSON.stringify([newCartItem])
    localStorage.setItem("cart", stringifyCartItem)
  }else{
    const parsedCartItems = JSON.parse(currentCartItems);
    parsedCartItems.push(newCartItem)
    const stringifyCartItems = JSON.stringify(parsedCartItems)
    localStorage.setItem("cart", stringifyCartItems)
  }
}

export default addItemToLocalStorage;
