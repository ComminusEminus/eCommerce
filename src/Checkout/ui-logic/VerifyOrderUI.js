import { useFormik } from 'formik';
import {useState, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import {actions, CheckoutContext} from '../index'
import {apiClient} from '../../common/index'


const useVerifyOrderUI = () => {
  const navigate = useNavigate();
  const {state: {orderComplete, orderDetails}, dispatch} = useContext(CheckoutContext)
  const [openDialog, setOpenDialog] = useState(false);
  const [orderSubmissionMessage, setOrderSubmissionMessage] = useState('')
  const [total, setTotal] = useState('')
  const editHandler = () => {
    dispatch({type: actions.EDIT_ORDER_INFORMATION, payload: orderDetails})
  }
  const closeOrderCompleteDialogHandler = () => {
    setOpenDialog(false)
    dispatch({type: actions.FINALIZE_ORDER})
    navigate('/')
  }

  const submitOrderHandler = () => {
    apiClient.post('api/products', {orderDetails: JSON.stringify(orderDetails)}).then((res) => {
      console.log(res)
      if(res.status == '201'){
        setOrderSubmissionMessage("Your Order Has Been Submitted. Thank You For Shopping with BT's")
        setOpenDialog(true)
      }
    }).catch((error) => {
      setOrderSubmissionMessage("An Error has Occured During Your Order Submission Please Try Again Later")
      setOpenDialog(true)
    })

  }
  //export to common and import to here and in shopping cart for calculation also change to useMemo or useCallback
  useEffect(() => {
    const grandTotal = orderDetails.order.reduce((grandTotal, subTotal) => subTotal.lineTotal + grandTotal, 0)
    console.log(grandTotal)
    setTotal(grandTotal)
  }, [orderDetails])
  return {orderDetails, orderComplete, editHandler, submitOrderHandler, total,closeOrderCompleteDialogHandler ,orderSubmissionMessage, openDialog }

}


export default useVerifyOrderUI;
