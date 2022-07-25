import CustomerInformationDisplayContainer from './CustomerInformationDisplayContainer'
import ShoppingCartDisplayContainer from './ShoppingCartDisplayContainer'
import validateOrderAtters from '../Atters/validateOrderAtters'
import useValidateOrderHook from '../Hooks/ValidateOrderHook'
import OrderCompleteDialog from './OrderCompleteDialog'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const ValidateOrder = () => {
  const {
          submitOrder, 
          customerFormValues,
          shoppingCartValues,
          continueShoppingHandler,
          closeOrderCompleteDialogHandler,
          orderSubmissionMessage,
          openDialog
        } = useValidateOrderHook()
  if( customerFormValues){
    return(
      <>
        <Box {...validateOrderAtters.boxProps}>
          <ShoppingCartDisplayContainer shoppingCartValues = {shoppingCartValues} />
          <CustomerInformationDisplayContainer customerFormValues = {customerFormValues} />
          <Box {...validateOrderAtters.buttonBox} >
            <Button onClick = {continueShoppingHandler}{...validateOrderAtters.submitButtonProps}>
              Continue Shopping
            </Button>
            <Button onClick = {submitOrder} {...validateOrderAtters.submitButtonProps}>
              Submit Order
            </Button>
            <OrderCompleteDialog
              closeOrderCompleteDialogHandler = {closeOrderCompleteDialogHandler}
              orderSubmissionMessage = {orderSubmissionMessage}
              openDialog = {openDialog}
            />
          </Box>
        </Box>
      </>
    )
  }else{
    return(
      <>
        <h1> ...Loading</h1>
      </>
    )
  }
}

export default ValidateOrder
