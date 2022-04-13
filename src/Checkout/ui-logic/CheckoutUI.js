import { useFormik } from 'formik';

import {useContext, useEffect, useCallback} from 'react'

import actions from '../actions/actions'
import CheckoutContext from '../provider/CheckoutContext'
import {useNavigate} from 'react-router-dom'
const useCheckoutUI = (props) => {
  const navigate = useNavigate()
  const {state: {formMaterials, orderComplete}, dispatch} = useContext(CheckoutContext)
  const formik = useFormik({
    initialValues: formMaterials.initialValues,
    validationSchema: formMaterials.validationSchema,
    onSubmit: (values, action) => {
      console.log(values)
      action.setSubmitting(false)
      dispatch({type: actions.SUBMIT_ORDER, payload: values})
      navigate('/verifyOrder')
    },
  })

  return {formik, formMaterials, orderComplete}

}


export default useCheckoutUI;
