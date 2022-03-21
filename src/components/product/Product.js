import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

import PropTypes from "prop-types";
import {useState, useEffect} from 'react';

import getURL from '../../firebase/getDownLoadFireBaseURL'
//Note to self: Leave Img out until firebase setup, change justifyContent after adding img

const Product = ({productTitle, productPrice}) => {
  const [urlState, setUrlState] = useState('');

  useEffect(() => {
    getURL(productTitle, setUrlState);
  }, [])


  return (
    <>
      <Box sx = {{display: 'flex', flexDirection:'column', justifyContent: 'flex-end', alignContent: 'flex-start' }}>
        <img src = {urlState} alt = {productTitle} />
        <Typography variant = 'h4' component= 'h4'>
          {productTitle}
        </Typography>
        <Typography variant = 'h6' component= 'h4'>
          {productPrice}
        </Typography>
      </Box>
    </>
  )
}

Product.propTypes = {
  productTitle: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired
}

export default Product;
