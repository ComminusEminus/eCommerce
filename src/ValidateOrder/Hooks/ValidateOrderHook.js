import OrderSubmission from '../DataObjects/OrderSubmission'
import axios from 'axios'
import baseUrl from '../../Fetch/baseUrl'
import apiClient from '../../Fetch/apiClient'
import CustomerInfoContext from '../../CustomerInformation/Provider/CustomerInfoContext'
import ShoppingCartContext from '../../ShoppingCart/Provider/ShoppingCartContext'


import {useMemo, useContext, useEffect, useState, useLayoutEffect} from 'react'

const useValidateOrderHook = () => {
  const {state: {customerFormInstance}} = useContext(CustomerInfoContext)
  const {state: {cart}, dispatch, actions} = useContext(ShoppingCartContext)
  useEffect(() => {
    dispatch({type:actions.GET_CART})
  }, [customerFormInstance])
  const customerFormValues = useMemo(() => customerFormInstance.returnFormValues(), [customerFormInstance])
  const shoppingCartValues = useMemo(() => cart.getCart(), [cart])
  const customerOrder = useMemo(() => new OrderSubmission(JSON.stringify(customerFormValues), JSON.stringify(shoppingCartValues)), [shoppingCartValues, customerFormValues])

  const submitOrder = () => {
      (async() => {
        let response = await apiClient.post('api/products', JSON.stringify({orderDetails:customerOrder}))
        let data = await response.data
      })()
  }
  return {submitOrder, customerFormValues, shoppingCartValues}

}

export default useValidateOrderHook
