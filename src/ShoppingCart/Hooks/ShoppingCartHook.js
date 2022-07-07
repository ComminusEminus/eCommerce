import {useContext, useEffect, useMemo} from 'react'

import ShoppingCartContext from '../Provider/ShoppingCartContext'

const ShoppingCartHook = () => {
  const {state: {cart}, dispatch, actions} = useContext(ShoppingCartContext);
  useEffect(() => {
    dispatch({type: actions.GET_CART})
  }, [cart])

  return {cart}
}
export default ShoppingCartHook
