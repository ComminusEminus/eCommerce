import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import LinkBehavior from './LinkBehavior'

/*
  Button for using Material UI's icons and their iconButton component using LinkBehavior component to forward
  props and ref to react router Link. 
*/

const CartButton = () => {
  return (
    <IconButton component = {LinkBehavior} to = {'/cart'} sx = {{color:'white'}} aria-label="view shopping cart">
      <ShoppingCartIcon />
    </IconButton>
  )
}

export default CartButton;
