import CustomerInformationDisplayContainer from './CustomerInformationDisplayContainer'
import ShoppingCartDisplayContainer from './ShoppingCartDisplayContainer'
import validateOrderAtters from '../Atters/validateOrderAtters'
import useValidateOrderHook from '../Hooks/ValidateOrderHook'

import {memo} from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const ValidateOrder = () => {
  const {submitOrder, customerFormValues, shoppingCartValues} = useValidateOrderHook()
  if( customerFormValues){
    return(
      <>
        <Box {...validateOrderAtters.boxProps}>
          <ShoppingCartDisplayContainer shoppingCartValues = {shoppingCartValues} />
          <CustomerInformationDisplayContainer customerFormValues = {customerFormValues} />
          <Box {...validateOrderAtters.buttonBox} >
            <Button onClick = {submitOrder} {...validateOrderAtters.submitButtonProps}>
              Submit Order
            </Button>
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
