import ShoppingCartContext from './ShoppingCartContext'
import actions from '../Reducer/actions'
import shoppingCartReducer from '../Reducer/shoppingCartReducer'
import {useReducer, useEffect} from 'react'
const initialState = {
  cart: undefined
}

const ShoppingCartProvider = ({children}) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, initialState)
  useEffect(() => {
    dispatch({type:actions.GET_CART})
  },[])
  return(
    <ShoppingCartContext.Provider value = {{state, dispatch, actions}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
export default ShoppingCartProvider
