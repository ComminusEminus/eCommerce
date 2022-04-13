import CheckoutContext from './CheckoutContext';
import checkoutReducer from '../reducer/CheckoutReducer';
import actions from '../actions/actions'

import { useParams } from "react-router-dom";
import {useReducer, useEffect, useCallback} from 'react';

const initialState = {
  formMaterials: undefined,
  orderComplete: false,
  orderDetails: undefined
};

const CheckoutProvider = ({children}) => {
  const [state, dispatch] = useReducer(checkoutReducer, initialState)
  const params = useParams();
  useEffect(() => {
    dispatch({type: actions.CREATE_FORM_MATERIALS})
  }, [])
  return(
    <CheckoutContext.Provider value = {{state, dispatch}}>
      {children}
    </CheckoutContext.Provider>
  )
}

export default CheckoutProvider;
