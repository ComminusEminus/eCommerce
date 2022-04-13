import createNewCartItem from './createNewCartItem'

const addItemToLocalStorage = (id, title, qty, price, options) => {
  const newCartItem = createNewCartItem(id, title, qty, price, options)
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
