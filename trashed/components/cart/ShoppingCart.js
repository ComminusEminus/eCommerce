import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import addToCartValidSchema from '../forms/add-to-cart/addToCartValidSchema'
import AddToCartFields from '../forms/add-to-cart/addToCartFields'
import AddToCart from '../forms/add-to-cart/AddToCart'

import {useEffect, useState, useContext} from 'react'
//new functions
import {default as Cart} from '../../helpers/shopping-cart/shoppingCart'
//old functions
import ProductContext from '../../contexts/ProductContext'




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
  //new states
  const [currentCart, setCurrentCart] = useState(undefined)
  const [newCart, setNewCart] = useState(new Cart)
  const [editItem, setEditItem] = useState(undefined)
  //old states
  const [orders, setOrders] = useState([])
  const [open, setOpen] = useState(false);

  const [editOrderData, setEditOrderData] = useState({item: '', qty: '',price: '', options:'' })
  const handleClose = () => setOpen(false);

  const {state: {allProducts}, productDispatch: {refreshProduct}} = useContext(ProductContext);

  const handleOpen = (event) => {
    const editItem = newCart.findItem(event.target.value)
    setEditItem(editItem)
    setOpen(true)
  }
  //oldeffects
  useEffect(() => {
    console.log(editOrderData)
  }, [editOrderData])
  useEffect(() => {
      const cart = localStorage.getItem("cart")
      console.log(JSON.parse(cart))
      setOrders(JSON.parse(cart))
  }, [])
  //newEffect
  useEffect(() => {
    setCurrentCart(newCart.returnCurrentCart())
  }, [localStorage.getItem('cart')])
  const totalDue = () => {
    const tempCard = localStorage.getItem("cart")
    const parsedCart = JSON.parse(tempCard)
    let orderArray = []
    const filterCart = parsedCart.filter(item => orderArray.push(item.total))
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
              currentCart && currentCart.map((item) => {
                return(
                  <>
                    <Grid key = {`item-${item.orderId}`} item xs={5} sx = {{borderBottom: 1, borderColor: '#9bc0ff', display: 'flex', justifyContent: "center", p: 3}}>
                      <Typography key = {`item-${item.orderId}-text`}  variant = 'h6' sx = {{fontWeight: 600}}>
                        {item.metaData.title}
                        <span>
                          <Typography variant = 'h6' sx = {{fontWeight: 300}}>
                            {item.option}
                          </Typography>
                        </span>
                      </Typography>
                    </Grid>
                    <Grid key = {`qty-${item.orderId}`} item xs={5} sx = {{borderBottom: 1, borderColor: '#9bc0ff', display: 'flex', justifyContent: "center", p: 3}}>
                      <Typography key = {`qty-${item.orderId}-text`} variant = 'h6' sx = {{fontWeight: 600}}>
                        {item.qty}
                      </Typography>
                    </Grid>
                    <Grid key = {`price-${item.orderId}`}  item xs={5} sx = {{borderBottom: 1, borderColor: '#9bc0ff', display: 'flex', justifyContent: "center", p: 3}}>
                      <Typography key = {`price-${item.orderId}-text`} variant = 'h6' sx = {{fontWeight: 600}}>
                        {item.metaData.price}
                      </Typography>
                    </Grid>
                    <Grid key = {`total-${item.orderId}`} item xs={5} sx = {{borderBottom: 1, borderColor: '#9bc0ff', display: 'flex', justifyContent: "flex-end", p: 3}}>
                      <Typography key = {`total-${item.orderId}-text`} variant = 'h6' sx = {{fontWeight: 600}}>
                        ${item.total}.00
                      </Typography>
                      <span>
                        <Button variant = 'contained' value = {item.orderId} onClick = {handleOpen} sx = {{ml: 1}}>
                          Edit
                        </Button>
                      </span>
                    </Grid>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                      key = {`edit-model-${item.orderId}`}
                    >
                      <Box sx={style}>
                        {!editItem && <Typography variant = 'h6'>...Loading</Typography>}
                        {
                          editItem && <AddToCart
                            buttonText = {'Update Cart'}
                            initialValues = {newCart.cartItemAdapter(editItem.orderId)}
                            submitFunction = {newCart.updateCartItem}
                            valSchema = {addToCartValidSchema}
                          >
                            <AddToCartFields />
                          </AddToCart>
                        }
                      </Box>
                    </Modal>
                  </>
                )
              })
            }
            {
              !currentCart && <Grid item xs = {12}><Typography variant = 'h6'>...Loading</Typography></Grid>
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
/*  {
  editOrderData && <AddToCart
    product = {allProducts}
    buttonText = {'Confirm Changes'}
    initialValues = {{
      qty: editOrderData.qty,
      title: editOrderData.title,
      option: editOrderData.options,
      price: editOrderData.price,
      id: editOrderData.id
    }}
    submitFunction = {{addToCartSubmitFunction}}
  >
    <AddToCartFields />
  </AddToCart>
}*/
export default ShoppingCart;
