import Box from '@mui/material/Box'

import ShoppingCart from './ShoppingCart'
import useShoppingCartHook from '../Hooks/ShoppingCartHook'
import shoppingCartContainerAtters from '../Atters/shoppingCartContainerAtters'

const ShoppingCartContainer = () => {
  const {cart} = useShoppingCartHook();
  return (
    <>
      {
        cart && <Box {...shoppingCartContainerAtters.boxProps}>
          <ShoppingCart cart = {cart} />
        </Box>
      }
      {
        !cart && <h1>...Loading</h1>
      }
    </>
  )
}

export default ShoppingCartContainer
/*
{
  cart && <Box {...shoppingCartContainerAtters.boxProps}>
    <ShoppingCart cart = {cart} />
  </Box>
}
{
  !cart && <h1>...Loading</h1>
}
*/
