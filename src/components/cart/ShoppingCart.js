import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import {useEffect, useState} from 'react'


const ShoppingCart = () => {
  const gridHeaders = ['Item', 'Qty', 'Price', 'Total']
  const [orders, setOrders] = useState('')

  useEffect(() => {
    const cart = localStorage.getItem("cart")
    setOrders(JSON.parse(cart))
  }, [])

  console.log(JSON.parse(localStorage.getItem("cart")))
  return(
    <>
      <Box>
        <Grid container>
          {
            gridHeaders.map((header) => {
              return(
                <Grid item xs={3}>
                  <Typography variant = 'h4'>
                    {header}
                  </Typography>
                </Grid>
              )
            })
          }
          {
            orders && orders.map((item) => {
              return(
                <>
                  <Grid key = "item" item xs={3}>
                    <Typography variant = 'h6'>
                      {item.item}
                    </Typography>
                  </Grid>
                  <Grid key = "qty" item xs={3}>
                    <Typography variant = 'h6'>
                      {item.qty}
                    </Typography>
                  </Grid>
                  <Grid key = "price"  item xs={3}>
                    <Typography variant = 'h6'>
                      {item.price}
                    </Typography>
                  </Grid>
                  <Grid key = "total" item xs={3}>
                    <Typography variant = 'h6'>
                      {item.total}
                    </Typography>
                  </Grid>
                </>
              )
            })
          }
          {
            !orders && <Grid item xs = {12}><Typography variant = 'h6'>...Loading</Typography></Grid>
          }
        </Grid>
      </Box>
    </>

  )
}

export default ShoppingCart;
