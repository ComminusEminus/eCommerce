import {useContext} from 'react'
import CustomerInfoContext from '../Provider/CustomerInfoContext'
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";


const useCustomerInfoFormHook = (props) => {

  const {dispatch, actions} = useContext(CustomerInfoContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: props.returnFormValues(),
    validationSchema: props.returnFormSchema(),
    onSubmit: (values, action) => {
      action.setSubmitting(false)
      dispatch({type: actions.UPDATE_FORM_INSTANCE, payload: values})
      navigate('/validate')
    },
  })
  const continueShoppingHandler = () => {
    navigate('/cart')
  }
  return {formik, continueShoppingHandler}
}

export default useCustomerInfoFormHook;
