import { useFormik } from 'formik';
import {useContext, useMemo, useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import ShoppingCartContext from '../../ShoppingCart/Provider/ShoppingCartContext'

const useFormHook = (props) => {
  const {dispatch, actions} = useContext(ShoppingCartContext);
  const [productOrder, setProductOrder] = useState(props)
  const navigate = useNavigate()
  const formik = useFormik({
      initialValues: props.getFormValues(),
      validationSchema: props.getSchema(),
      onSubmit: (values, action) => {
      action.setSubmitting(false)
      dispatch({type: actions.ADD_TO_CART, payload: props.updateOrder(values)})
      navigate('/cart')
    },
  })
    return {formik, productOrder}
}
export default useFormHook
