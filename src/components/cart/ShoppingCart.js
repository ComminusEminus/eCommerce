import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import {useEffect, useState} from 'react'



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ShoppingCart = () => {
  const gridHeaders = ['Item','Qty', 'Price', 'Total']
  const [orders, setOrders] = useState('')
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState('')
  const handleClose = () => setOpen(false);

  const handleOpen = (event) => {
    setEditItem(event.target.value)
    setOpen(true)
  }
  useEffect(() => {
      const cart = localStorage.getItem("cart")
      setOrders(JSON.parse(cart))
  }, [])
  const totalDue = () => {
    const tempCard = localStorage.getItem("cart")
    const paresedCart = JSON.parse(tempCard)
    let orderArray = []
    const filterCart = paresedCart.filter(item => orderArray.push(item.total))
    const totalOwed = orderArray.reduce((previousValue, currentValue) => {
      return (orderArray.length > 1)? previousValue + currentValue : currentValue
    });
    return totalOwed
  }
  totalDue()
  return(
    <>
      <Container sx = {{pt: 6}}>
        <Paper elevation = {6}>
          <Grid container columns = {20}>
            {
              gridHeaders.map((header, index) => {
                return(
                  <Grid key = {`header-${index}`} item xs={5} sx = {{ backgroundColor: '#1769aa', display: 'flex', justifyContent: "center", p: 3}}>
                    <Typography key = {`header-text${index}`} variant = 'h4' sx = {{color: 'white', fontWeight: 900}}>
                      {header}
                    </Typography>
                  </Grid>
                )
              })
            }
            {
              orders && orders.map((item, index) => {
                return(
                  <>
                    <Grid key = {`item-${index}`} item xs={5} sx = {{borderBottom: 1, borderColor: '#9bc0ff', display: 'flex', justifyContent: "center", p: 3}}>
                      <Typography key = {`item-${index}-text`}  variant = 'h6' sx = {{fontWeight: 600}}>
                        {item.item}
                        <span>
                          <Typography variant = 'h6' sx = {{fontWeight: 300}}>
                            {item.options}
                          </Typography>
                        </span>
                      </Typography>
                    </Grid>
                    <Grid key = {`qty-${index}`} item xs={5} sx = {{borderBottom: 1, borderColor: '#9bc0ff', display: 'flex', justifyContent: "center", p: 3}}>
                      <Typography key = {`qty-${index}-text`} variant = 'h6' sx = {{fontWeight: 600}}>
                        {item.qty}
                      </Typography>
                    </Grid>
                    <Grid key = {`price-${index}`}  item xs={5} sx = {{borderBottom: 1, borderColor: '#9bc0ff', display: 'flex', justifyContent: "center", p: 3}}>
                      <Typography key = {`price-${index}-text`} variant = 'h6' sx = {{fontWeight: 600}}>
                        {item.price}
                      </Typography>
                    </Grid>
                    <Grid key = {`total-${index}`} item xs={5} sx = {{borderBottom: 1, borderColor: '#9bc0ff', display: 'flex', justifyContent: "flex-end", p: 3}}>
                      <Typography key = {`total-${index}-text`} variant = 'h6' sx = {{fontWeight: 600}}>
                        ${item.total}.00
                      </Typography>
                      <span>
                        <Button variant = 'contained' value = {item.id} onClick = {handleOpen} sx = {{ml: 1}}>
                          Edit
                        </Button>
                      </span>
                    </Grid>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography>
                          Model Stuff
                        </Typography>
                      </Box>
                    </Modal>
                  </>
                )
              })
            }
            {
              !orders && <Grid item xs = {12}><Typography variant = 'h6'>...Loading</Typography></Grid>
            }
          </Grid>
        </Paper>
        <Grid container>
          <Grid xs = {6} item>
            <Box sx = {{p:3, width: '100%', display:'flex', flexDirection: 'column',justifyContent: 'flex-end', alignItems: 'flex-start'}}>
              <Button variant = "contained">
                Continue Shopping
              </Button>
            </Box>
          </Grid>
          <Grid xs = {6} item>
            <Box sx = {{p:3, width: '100%', display:'flex', flexDirection: 'column',justifyContent: 'flex-end', alignItems: 'flex-end'}}>
              <Typography variant = 'h5' sx = {{fontWeight: 900}}>
                Sub Total
              </Typography>
              <Typography variant = 'h5' sx = {{fontWeight: 300, mb:5}}>
                ${totalDue()}.00
              </Typography>
              <Button variant = "contained">
                Check Out
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>

  )
}


export default ShoppingCart;
