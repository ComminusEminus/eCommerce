import { useFormik } from 'formik';

import {useContext, useEffect, useCallback} from 'react'

import {actions, ShoppingCartContext} from '../index'



const useEditOrderUI = (props) => {
  const {state: {formMaterials}, dispatch} = useContext(ShoppingCartContext)
  const close = props.closeModel
  const formik = useFormik({
    initialValues: formMaterials.initialValues,
    validationSchema: formMaterials.validationSchema,
    onSubmit: (values, action) => {
      console.log(values, action)
      close()
      action.setSubmitting(false)
      dispatch({type: actions.UPDATE_ORDER, payload: {values: values, product: formMaterials.productData, id: formMaterials.itemOrderId} })
    },
  })

  return {formik, formMaterials}

}


export default useEditOrderUI;
