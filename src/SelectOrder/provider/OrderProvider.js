import {actions, orderReducer} from '../index'
import OrderContext from './OrderContext'

import {useReducer, useEffect} from 'react';

const initialState = {
  order: undefined,
  formMaterials: undefined
};

const OrderProvider = ({children}) => {
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return(
    <OrderContext.Provider value = {{state, dispatch}}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider;
