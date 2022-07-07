import actions from './actions'
import ShoppingCart from '../DataObjects/ShoppingCart'

const shoppingCartReducer = (state, action) => {

  switch(action.type){
    case actions.GET_CART:
      return {cart: ShoppingCart}
    case actions.ADD_TO_CART:
      ShoppingCart.addToCart(action.payload)
      return {cart: ShoppingCart}
    case actions.DELETE_ITEM:
      ShoppingCart.removeFromCart(action.payload)
      return{cart: ShoppingCart}
    case actions.CLEAR_CART:
      ShoppingCart.clearCart()
      return{cart:ShoppingCart}
    default:
      return state
  }
}

export default shoppingCartReducer
