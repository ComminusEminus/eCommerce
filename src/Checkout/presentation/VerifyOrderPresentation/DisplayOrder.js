import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

import PropTypes from "prop-types";

const DisplayOrder = ({orderItem}) => {
  const detailsVariant = 'h5';
  const {title, option, qty, price} = orderItem;
  return (
    <>
      <Grid key = {`${title}-title`} xs = {3} item>
        <Box sx = {{p:3, display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Typography variant = {detailsVariant}>
            {title}
          </Typography>
        </Box>
      </Grid>
      <Grid key = {`${title}-option`} xs = {3} item>
        <Box sx = {{p:3, display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Typography variant = {detailsVariant}>
            {option}
          </Typography>
        </Box>
      </Grid>
      <Grid key = {`${title}-qty`} xs = {3} item>
        <Box sx = {{p:3, display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Typography variant = {detailsVariant}>
            {qty} unit(s)
          </Typography>
        </Box>
      </Grid>
      <Grid key = {`${title}-price`} xs = {3} item>
        <Box sx = {{p:3, display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Typography variant = {detailsVariant}>
            ${price}.00
          </Typography>
        </Box>
      </Grid>
      <Grid key = {`${title}-divider`} xs = {12}  item>
        <Box sx = {{p:5}}>
          <Divider />
        </Box>
      </Grid>
    </>
  )
}

DisplayOrder.propTypes = {
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

export default DisplayOrder;
