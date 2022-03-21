import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import Product from '../product/Product'


const ProductListing = ({products}) => {
  return (
    <>
      <Box sx = {{display:'flex', justifyContent: 'center', alignItems:'flex-start', p:6}}>
        <Grid container spacing={2}>
          {!products && <Typography variant = 'h3'>...Loading</Typography>}
          {products && products.map((productItem) => {
            return(
              <Grid item xs={6} md={3} key = {`product-item-${productItem.id}`}>
                <Link
                  to = {`/detail/${productItem.id}`}
                >
                  <Product productTitle = {productItem.title} productPrice = {productItem.price} />
                </Link>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </>
  )
}

ProductListing.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
      options: PropTypes.array,
      catagory: PropTypes.string,
      sale: PropTypes.bool
    })
  ),
}

export default ProductListing;
