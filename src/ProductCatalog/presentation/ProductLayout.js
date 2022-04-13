import ProductPresentation from '../presentation/ProductPresentation'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

import ProductSkeleton from './ProductSkeleton'

import PropTypes from "prop-types";

const ProductLayout = ({products, view}) => {

  if(products){
    return (
      <>
        <Box sx = {{my: 3, display:'flex', justifyContent: 'center', alignItems: 'stretch'}}>
          <Grid spacing={2} sx = {{alignContent: 'stretch'}} container>
          {
            products.map((product) => {
              return(
                <Grid key = {`${product.title}-${product.id.toString()}`} xs = {(view)? 12 : 4} item>
                  <ProductPresentation product = {product} view = {view}/>
                </Grid>
              )
            })
          }
          </Grid>
        </Box>
      </>
    )
  }else{
    return(
      <Box sx = {{my: 3, display:'flex', justifyContent: 'center', alignItems: 'stretch'}}>
        <ProductSkeleton />
      </Box>
    )
  }
}
ProductLayout.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      options: PropTypes.array.isRequired,
      price: PropTypes.number.isRequired,
      tags: PropTypes.array.isRequired,
    })
  ),
  view: PropTypes.bool.isRequired
}
export default ProductLayout;
