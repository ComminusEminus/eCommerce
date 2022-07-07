import OrderSubmission from '../DataObjects/OrderSubmission'
import axios from 'axios'
import baseUrl from '../../Fetch/baseUrl'
import apiClient from '../../Fetch/apiClient'
import CustomerInfoContext from '../../CustomerInformation/Provider/CustomerInfoContext'
import ShoppingCartContext from '../../ShoppingCart/Provider/ShoppingCartContext'
import {useNavigate} from 'react-router-dom'


import {useMemo, useContext, useEffect, useState, useLayoutEffect} from 'react'

const useValidateOrderHook = () => {
  const navigate = useNavigate()
  const [openDialog, setOpenDialog] = useState(false);
  const [orderSubmissionMessage, setOrderSubmissionMessage] = useState('')
  const {state: {customerFormInstance}} = useContext(CustomerInfoContext)
  const {state: {cart}, dispatch, actions} = useContext(ShoppingCartContext)
  useEffect(() => {
    dispatch({type:actions.GET_CART})
  }, [customerFormInstance])
  const customerFormValues = useMemo(() => customerFormInstance.returnFormValues(), [customerFormInstance])
  const shoppingCartValues = useMemo(() => {
    let cartContents = cart.getCart()
    delete cartContents.schema
    return cartContents
  }, [cart])
  const customerOrder = useMemo(() => new OrderSubmission(JSON.stringify(customerFormValues), JSON.stringify(shoppingCartValues)), [shoppingCartValues, customerFormValues])

  const continueShoppingHandler = () => {
    navigate('/')
  }
  const closeOrderCompleteDialogHandler = () => {
    setOpenDialog(false)
    dispatch({type: actions.FINALIZE_ORDER})
    navigate('/')
  }
  const submitOrder = async () => {
    let response = await apiClient.post('api/products', JSON.stringify({orderDetails:customerOrder}))
    let data = await response
    setOpenDialog(true)
    if(data.status == '201'){
      setOrderSubmissionMessage("Your Order Has Been Submitted. Thank You For Shopping with BT's")
    }else{
      setOrderSubmissionMessage("An Error has Occured During Your Order Submission Please Try Again")
    }
    dispatch({type: actions.CLEAR_CART})
  }
  return {submitOrder, customerFormValues, shoppingCartValues, continueShoppingHandler, closeOrderCompleteDialogHandler, orderSubmissionMessage, openDialog}

}

export default useValidateOrderHook
