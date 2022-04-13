import {actions, shoppingCart, selectOrderSchema, cartItemToOrder} from '../index';

const shoppingCartReducer = (state, action) => {
  switch(action.type){
    case actions.GET_ORDER:
      const cart = new shoppingCart();
      const newCart = cart.addItemToCart(action.payload)
      return {orders: newCart};
    case actions.EDIT_PRODUCT:
      const lookUpItem = new shoppingCart();
      const formMaterials = lookUpItem.findCartItem(action.payload)
      return {...state, formMaterials: formMaterials}
    case actions.UPDATE_ORDER:
      const updateShoppingCart = new shoppingCart();
      const updateCart = updateShoppingCart.updateCartItem(action.payload)
      return {orders: updateCart}
    case actions.GET_CURRENT_CART:
      const getShoppingCart = new shoppingCart()
      const currentCartItems = getShoppingCart.returnCart()
      return {orders: currentCartItems}
    default:
      return state
  }
}



export default shoppingCartReducer;
