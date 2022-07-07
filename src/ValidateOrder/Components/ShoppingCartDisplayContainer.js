import ShoppingCartDisplay from './ShoppingCartDisplay'

import useShoppingCartHook from '../../ShoppingCart/Hooks/ShoppingCartHook'

const ShoppingCartDisplayContainer = ({shoppingCartValues}) => {

  return(
    <>
      {
        shoppingCartValues && <ShoppingCartDisplay shoppingCartValues = {shoppingCartValues} />
      }
      {
        !shoppingCartValues && <h1>...Loading</h1>
      }
    </>
  )
}

export default ShoppingCartDisplayContainer
