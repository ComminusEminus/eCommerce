import { useFormik } from 'formik';

import {useState, useContext, useEffect} from 'react'

import actions from '../actions/actions'
import CheckoutContext from '../provider/CheckoutContext'

import { useNavigate } from 'react-router-dom';

const useVerifyOrderUI = () => {
  const navigate = useNavigate();
  const {state: {orderComplete, orderDetails}, dispatch} = useContext(CheckoutContext)
  const [total, setTotal] = useState('')
  const editHandler = () => {
    dispatch({type: actions.EDIT_ORDER_INFORMATION, payload: orderDetails})
  }
  const submitOrderHandler = () => {
    dispatch({type: actions.FINALIZE_ORDER, payload: orderDetails})
    navigate('/')
  }
  //export to common and import to here and in shopping cart for calculation also change to useMemo or useCallback
  useEffect(() => {
    const grandTotal = orderDetails.order.reduce((grandTotal, subTotal) => subTotal.lineTotal + grandTotal, 0)
    console.log(grandTotal)
    setTotal(grandTotal)
  }, [orderDetails])
  return {orderDetails, orderComplete, editHandler, submitOrderHandler, total}

}


export default useVerifyOrderUI;
