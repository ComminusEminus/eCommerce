import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import LinkBehavior from './LinkBehavior'

const CartButton = () => {
  return (
    <IconButton component = {LinkBehavior} to = {'/cart'} sx = {{color:'white'}} aria-label="view shopping cart">
      <ShoppingCartIcon />
    </IconButton>
  )
}

export default CartButton;
