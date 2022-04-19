import ShoppingCartLayout from '../presentation/ShoppingCartLayout'
import ShoppingCartContext from '../provider/ShoppingCartContext'
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import {useContext} from 'react'

/*
  Entry point for displaying shopping cart. Requies a loading and empty display in addition to the shopping cart using if else conditional.
*/


const ShoppingCartContainer = () => {
  const {state: {orders}, dispatch} = useContext(ShoppingCartContext);
  const typeVar = 'h4'
  if(orders){
      return(
        <>
          <ShoppingCartLayout currentCart = {orders} dispatch = {dispatch} />
        </>
      )
  }else if(orders == undefined){
    return(
      <Box sx={{mt:3, width: '100%', height:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Skeleton variant="rectangular" height={500} width={1500} />
      </Box>
    )
  }else if(orders.length == 0){
    return(
      <Typography variant = {typeVar}>Your Cart is Empty</Typography>
    )
  }
}

export default ShoppingCartContainer;
