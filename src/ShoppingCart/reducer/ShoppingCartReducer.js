import {actions, shoppingCart, selectOrderSchema, cartItemToOrder} from '../index';


const shoppingCartReducer = (state, action) => {
  switch(action.type){
    case actions.GET_ORDER:
      const addToCart = new shoppingCart();
      const {values, product} = action.payload;
      const newCart = addToCart.addItemToCart(values, product)
      return {orders: newCart};
    case actions.EDIT_PRODUCT:
      const editCart = new shoppingCart();
      const formMaterials = editCart.findCartItem(action.payload)
      return {...state, formMaterials: formMaterials}
    case actions.UPDATE_ORDER:
      const updateCart = new shoppingCart();
      const {values: updateValues, product:updateProduct, id} = action.payload;
      const updatedCart = updateCart.updateCartItem(updateValues, updateProduct, id)
      return {orders: updateCart.cart}
    case actions.GET_CURRENT_CART:
      const getCurrentCart = new shoppingCart();
      const currentCartItems = getCurrentCart.returnCart()
      return {orders: currentCartItems}
    case actions.DELETE_ITEM:
      const removeCartItem = new shoppingCart();
      const removedCart = removeCartItem.removeCartItem(action.payload)
      return {orders:removedCart}
    default:
      return state
  }
}



export default shoppingCartReducer;
