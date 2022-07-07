import Button from '@mui/material/Button'

import shoppingCartOptionsAtters from '../Atters/shoppingCartOptionsAtters'
import useCartOptionsHook from '../Hooks/ShoppingCartOptionsHook'

const ShoppingCartOptions = ({emptyCart}) => {
    const {checkOutHandler, continueShoppingHandler} = useCartOptionsHook()

    return(
      <>
        <Button onClick = {continueShoppingHandler} {...shoppingCartOptionsAtters.continueShopping}>
          Continue Shopping
        </Button>
        {
          !emptyCart && <Button onClick = {checkOutHandler} {...shoppingCartOptionsAtters.checkOutProps}>
            Checkout
          </Button>
        }
        {
          emptyCart && <Button disabled onClick = {checkOutHandler} {...shoppingCartOptionsAtters.checkOutProps}>
            Checkout
          </Button>
        }
      </>
    )
}

export default ShoppingCartOptions
