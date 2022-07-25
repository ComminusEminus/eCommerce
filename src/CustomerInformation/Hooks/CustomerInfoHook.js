import {useContext, useLayoutEffect} from 'react'

import CustomerInfoContext from '../Provider/CustomerInfoContext'

const useCustomerInfoHook = () => {
  const {state: {customerFormInstance}, dispatch, actions} = useContext(CustomerInfoContext)

  useLayoutEffect(() => {
    dispatch({type: actions.CREATE_FORM_INSTANCE})
  },[])

  return customerFormInstance
}

export default useCustomerInfoHook
