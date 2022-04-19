import DisplayOrder from './DisplayOrder'
import MapCustomerInformation from './MapCustomerInformation'
import MapOrderInformation from './MapOrderInformation'
import OrderCompleteDialog from './OrderCompleteDialog'
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton';

import PropTypes from "prop-types";

/*
  The verify order object has two primary properties. Customer shipping and billing information that
  was filled out prior to the verify order page and the order from the shopping cart.
  mapping of order and customer information is decoupled into seperate files mapcustomerinformation and
  map orderinformation.

  There is a edit shipping and billing information when clicked will return the user back to the previous
  pages form but with existing information already available.

  The submit order button will send the order information to the db server where it will be parsed and added to
  the database. The db server will return a status code of 201 which will alert the user with a pop up that
  the order has been successfully added then clear data from localstorage and return the user the home screen
  after clicking the acknowdlage button. If anythong other than 201 the pop up message will inform the user that
  an error occured and try to submit order again. 
*/


const VerifyOrder = ({editHandler, details, submitOrderHandler, orderTotal, closeOrderCompleteDialogHandler, orderSubmissionMessage, openDialog}) =>{

  const navigate = useNavigate();
  const {customerInformation, order} = details;
  console.log(customerInformation)
  if(details){
    return (
      <>
        <Box sx = {{mt:4, display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height:'100%'}}>
          <Typography variant = 'h5' sx ={{fontWeight: 500, mb:3, m:2}}>
            Please Verify Order Information is Correct
          </Typography>
          <Paper elevation = {4} sx = {{pb:3,width:'100%',borderRadius:8, display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center'}}>
            <Box sx = {{mb:2, bgcolor: 'primary.main', width: '100%',height:'100%', display:'flex', justifyContent: 'flex-start', alignItems:'center'}}>
              <Typography variant = 'h4' sx ={{fontWeight: 500, mb:3, color: 'white', m:2}}>
                Shipping & Billing Information
              </Typography>
            </Box>
            <Grid container>
              <MapCustomerInformation customerInformation = {customerInformation} />
            </Grid>
            <Button variant = 'contained' onClick = {editHandler} sx = {{alignSelf:'flex-end', mr:3}}>
              Edit Shipping/Billing
            </Button>
          </Paper>
          <Paper elevation = {4} sx = {{mt:3,pb:1, width:'100%',borderRadius:8, display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center'}}>
            <Box sx = {{bgcolor: 'primary.main', width: '100%',height:'100%', display:'flex', justifyContent: 'flex-start', alignItems:'center'}}>
              <Typography variant = 'h4' sx ={{fontWeight: 500, mb:3, color: 'white', m:2}}>
                Order
              </Typography>
            </Box>
            <Grid container>
              <MapOrderInformation order = {order} />
            </Grid>
          </Paper>
          <Box sx ={{mt:4, p:3,width:'100%', display:'flex',flexDirection:'column', alignItems: 'flex-end', justifyContent: 'space-evenly'}}>
            <Typography variant = 'h3' sx ={{fontWeight: 700, mb:3}}>
              Total
            </Typography>
            <Typography variant = 'h4' sx ={{fontWeight: 500, mb:1}}>
              ${orderTotal}.00
            </Typography>
            <Button variant = 'contained' onClick = {submitOrderHandler}>
              Submit Order
            </Button>
            <OrderCompleteDialog
              closeOrderCompleteDialogHandler = {closeOrderCompleteDialogHandler}
              orderSubmissionMessage = {orderSubmissionMessage}
              openDialog = {openDialog}
            />
          </Box>
        </Box>
      </>
    )
  }else{
    <>
      <Grid container>
        <Grid xs ={12} item>
          <Skeleton variant="rectangular" height={500} width={300} />
        </Grid>
        <Grid xs ={12} item>
          <Skeleton variant="rectangular" height={500} width={300} />
        </Grid>
      </Grid>
    </>
  }
}

VerifyOrder.propTypes = {
  details: PropTypes.shape({
    itemOrderId: PropTypes.string.isRequired,
    qty: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired,
    lineTotal: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productData: PropTypes.object.isRequired
  }),
  orderTotal: PropTypes.number.isRequired,
}

export default VerifyOrder;
