import ShoppingCartItem from '../../ShoppingCart/Components/ShoppingCartItem'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import shoppingCartDisplayAtters from '../Atters/shoppingCartDisplayAtters'
import useEditOrderHook from '../Hooks/EditOrderHook'

const ShoppingCartDisplay = ({shoppingCartValues}) => {
  const {editShoppingCartHandler} = useEditOrderHook()

  return(
    <>
      <Box {...shoppingCartDisplayAtters.containerProps}>
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
      <Box {...shoppingCartDisplayAtters.buttonBox}>
        <Button onClick = {editShoppingCartHandler}{...shoppingCartDisplayAtters.editCartButton}>
          Edit
        </Button>
      </Box>
    </>
  )
}

export default ShoppingCartDisplay
