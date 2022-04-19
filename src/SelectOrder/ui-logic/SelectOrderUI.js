import { useFormik } from 'formik';
import {useContext, useEffect, useState, useMemo} from 'react'
import { useNavigate } from 'react-router-dom';

import {OrderContext} from '../index'
import {actions, ShoppingCartContext} from '../../ShoppingCart/index'

const useSelectOrderUI = (props) => {
  const {state: {formMaterials}} = useContext(OrderContext)
  const {dispatch} = useContext(ShoppingCartContext)
  const [product, setProduct] = useState('')
  useEffect(() => {
    setProduct(formMaterials.productData)
  },[formMaterials])
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: formMaterials.initialValues,
    validationSchema: formMaterials.validationSchema,
    onSubmit: (values, action) => {
      action.setSubmitting(false)
      dispatch({type: actions.GET_ORDER, payload: {values: values, product: product} })
      navigate('/cart')
    },
  })
  return {formik, formMaterials}

}


export default useSelectOrderUI;
