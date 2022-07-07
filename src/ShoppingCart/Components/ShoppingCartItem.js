import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import shoppingCartItemAtters from '../Atters/shoppingCartItemAtters'

const ShoppingCartItem = ({cartData}) => {
  const {productTitle, option, qty, price} = cartData

  return (
    <>
      <Box {...shoppingCartItemAtters.productInfoBox}>
        <Typography {...shoppingCartItemAtters.productTitleProps}>
          {productTitle}
        </Typography>
        <Typography {...shoppingCartItemAtters.productOptionProps}>
          {option}
        </Typography>
        <Typography {...shoppingCartItemAtters.productQtyProps}>
          {qty}
        </Typography>
        <Typography {...shoppingCartItemAtters.productPriceProps}>
          ${price.toFixed(2)}
        </Typography>
      </Box>
    </>
  )
}

export default ShoppingCartItem
