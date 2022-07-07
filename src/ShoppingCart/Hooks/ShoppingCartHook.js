import {useContext, useEffect, useMemo} from 'react'

import ShoppingCartContext from '../Provider/ShoppingCartContext'

const ShoppingCartHook = () => {
  const {state: {cart}} = useContext(ShoppingCartContext);

  return {cart}
}
export default ShoppingCartHook
