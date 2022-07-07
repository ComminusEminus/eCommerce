import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import {Fragment} from 'react'

import ShoppingCartItemComp from './ShoppingCartItemComp'
import ShoppingCartData from './ShoppingCartData'
import ShoppingCartOptions from './ShoppingCartOptions'
import shoppingCartAtters from '../Atters/shoppingCartAtters'

const ShoppingCart = ({cart}) => {
  if(cart.getCart().length > 0){
    return(
      <>
        <Box {...shoppingCartAtters.itemBox}>
          {
            cart.getCart().map((item) => {
              return(
                <Fragment key = {item.formId}>
                  <Box {...shoppingCartAtters.compBox}>
                    <ShoppingCartItemComp cartData = {item} />
                  </Box>
                </Fragment>
              )
            })
          }
        </Box>
        <Box {...shoppingCartAtters.infoBox}>
          <ShoppingCartData total = {cart.calcTotal().toFixed(2)} />
        </Box>
        <Box {...shoppingCartAtters.optionsBox}>
          <ShoppingCartOptions />
        </Box>
      </>
    )
  }else{
    return(
      <>
      <Box {...shoppingCartAtters.itemBox}>
        <Typography {...shoppingCartAtters.emptyCartText}>
          Cart Is Empty
        </Typography>
      </Box>
      <Box {...shoppingCartAtters.infoBox}>
        <ShoppingCartData total = {'N/A'} />
      </Box>
      <Box {...shoppingCartAtters.optionsBox}>
        <ShoppingCartOptions emptyCart = {true} />
      </Box>
      </>
    )
  }

}

export default ShoppingCart
