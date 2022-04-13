import { useFormik } from 'formik';

import {useContext, useEffect} from 'react'

import {actions, ShoppingCartContext} from '../../ShoppingCart/index'

import {OrderContext} from '../index'

//once created include shopping cart context also which will grab the submitted payload and add to shopping cart storage
const useSelectOrderUI = (props) => {
  const {state: {formMaterials}} = useContext(OrderContext)
  const {dispatch} = useContext(ShoppingCartContext)
  console.log(formMaterials)
  const formik = useFormik({
    initialValues: formMaterials.initialValues,
    validationSchema: formMaterials.validationSchema,
    onSubmit: (values, action) => {
      console.log(values)
      console.log('inside submit')
      action.setSubmitting(false)
      dispatch({type: actions.GET_ORDER, payload: [values, formMaterials.productData] })
    },
  })
  console.log(formMaterials)
  return {formik, formMaterials}

}


export default useSelectOrderUI;
