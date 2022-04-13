import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import DisplayOrder from './DisplayOrder'

import PropTypes from "prop-types";

const MapOrderInformation = ({order}) => {
  return (
    order.map((orderItem, index) => {
      return(
        <>
          <DisplayOrder orderItem = {orderItem} />
        </>
      )
    })
  )
}

MapOrderInformation.propTypes = {
  order: PropTypes.arrayOf(
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

export default MapOrderInformation;
