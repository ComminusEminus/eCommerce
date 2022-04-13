import CartItem from './cart-item/cartItem';
import ShoppingCart from './shopping-cart/shoppingCart';

function composeAddtoCart(initialValues, values){
  const cartItem = new CartItem(initialValues, values);
  const shoppingCart = new ShoppingCart();
  shoppingCart.addItem(cartItem.returnCartItem())
}

export default composeAddtoCart;
