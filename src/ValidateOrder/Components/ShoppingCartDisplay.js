import ShoppingCartItem from '../../ShoppingCart/Components/ShoppingCartItem'
import Box from '@mui/material/Box'

import shoppingCartDisplayAtters from '../Atters/shoppingCartDisplayAtters'

const ShoppingCartDisplay = ({shoppingCartValues}) => {


  return(
    <>
      <Box {...shoppingCartDisplayAtters.boxProps}>
        {
          shoppingCartValues && shoppingCartValues.map((item) => {
            return(
              <ShoppingCartItem key = {item.formId} cartData = {item} />
            )
          })
        }
        {
          !shoppingCartValues && <h1>...Loading</h1>
        }
      </Box>
    </>
  )
}

export default ShoppingCartDisplay
