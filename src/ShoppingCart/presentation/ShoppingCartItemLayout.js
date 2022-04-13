import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider';
import Model from '@mui/material/Modal';

import PropTypes from "prop-types";


import {useEditOrderUI} from '../index'
import {SelectOrderFields, FormWrapper} from '../../common/index'



const producBoxStyle = {
  p:3
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
};


const ShoppingCartItemLayout = (props) => {
  const {orderItem: {title, option, qty, price, lineTotal, itemOrderId}, modelOpen, modelClose, buttonOpen} = props;
  const textVariant = 'h4';
  const itemTextStyle = {
    fontWeight: 600
  }
  const gridItemSpacing = 3;
  return(
    <>
      <Grid item xs = {gridItemSpacing}>
        <Box sx = {producBoxStyle}>
          <Typography variant = {textVariant} sx = {itemTextStyle}>
            {title}
          </Typography>
          <Typography variant = {textVariant} sx = {itemTextStyle}>
            {option}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs = {gridItemSpacing}>
        <Box sx = {producBoxStyle}>
          <Typography variant = {textVariant}>
            {qty}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs = {gridItemSpacing}>
        <Box sx = {producBoxStyle}>
          <Typography variant = {textVariant}>
            ${price}.00
          </Typography>
        </Box>
      </Grid>
      <Grid item xs = {gridItemSpacing}>
        <Box sx = {{display:'flex', justifyContent: 'space-between', p:3}}>
          <Typography variant = {textVariant}>
            ${lineTotal}.00
          </Typography>
          <Button variant = 'contained' value = {itemOrderId} onClick = {buttonOpen}>
            Edit
          </Button>
        </Box>
      </Grid>
      <Grid xs = {12} sx = {{px:5}} item>
        <Divider />
      </Grid>
      <Model
        open={modelOpen}
        onClose={modelClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        key = {`edit-model-${itemOrderId}`}
      >
        <Box sx={style}>
          <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', width:'100%', height:'100%', py: 2}}>
            <Typography variant = {'h5'} sx = {{mb: 3, fontWeight: 600}}>
              {title}
            </Typography>
            <FormWrapper orderUI = {useEditOrderUI} closeModel = {modelClose}>
              <SelectOrderFields />
            </FormWrapper>
          </Box>
        </Box>
      </Model>
    </>
  )
}

ShoppingCartItemLayout.propTypes = {
  orderItem: PropTypes.shape({
    itemOrderId: PropTypes.string.isRequired,
    qty: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired,
    lineTotal: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productData: PropTypes.object.isRequired
  })
}

export default ShoppingCartItemLayout;
