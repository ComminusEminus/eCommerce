import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

import ShoppingCartHeaderLayout from './ShoppingCartHeaderLayout'
import ShoppingCartItemLayout from './ShoppingCartItemLayout'
import {useShoppingCartUI} from '../index'

import PropTypes from "prop-types";

const ShoppingCartLayout = (props) => {
  const {total, open, handleOpen, handleClose, checkOutHandler, continueShoppingHandler} = useShoppingCartUI(props)
  return(
    <>
      <Paper elevation = {5} sx = {{borderRadius: 8, my: 3, display:'flex', justifyContent: 'center', alignItems: 'stretch'}}>
        <Grid container>
          <ShoppingCartHeaderLayout />
          {
            props.currentCart.map((cartItem, index) => {
              return(
                <ShoppingCartItemLayout
                  key = {`cartitem${index}`}
                  orderItem = {cartItem}
                  modelClose = {handleClose}
                  modelOpen = {open}
                  buttonOpen = {handleOpen}
                />
              )
            })
          }
          <Grid xs = {9} sx = {{p:4}} item>
            <Button variant = 'contained' onClick = {continueShoppingHandler}>
              Continue Shopping
            </Button>
          </Grid>
          <Grid xs = {3} item>
            <Box sx = {{p:4, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems:'flex-end'}}>
              <Typography variant = 'h4' sx = {{fontWeight: 800, mb: 2}}>
                Sub Total
              </Typography>
              <Typography variant = 'h4'  sx = {{mb: 2}}>
                ${total}.00
              </Typography>
              <Button variant = 'contained' onClick = {checkOutHandler}>
                Check Out
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}
ShoppingCartLayout.propTypes = {
  currentCart: PropTypes.arrayOf(
    PropTypes.shape({
      itemOrderId: PropTypes.string.isRequired,
      qty: PropTypes.string.isRequired,
      option: PropTypes.string.isRequired,
      lineTotal: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      productData: PropTypes.object.isRequired
    })
  )
}
export default ShoppingCartLayout;