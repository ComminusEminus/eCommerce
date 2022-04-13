import {shoppingCart, ShoppingCartContext, actions, shoppingCartReducer} from '../index';

import {useReducer, useEffect, useCallback} from 'react';

const initialState = {
  orders: undefined,
  formMaterials: undefined
};

const ShoppingCartProvider = ({children}) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, initialState)

  useEffect(() => {
    dispatch({type: actions.GET_CURRENT_CART})
  }, [])

  return(
    <ShoppingCartContext.Provider value = {{state, dispatch}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider;
