import {useParams, useLocation} from "react-router-dom";
import {useContext, useEffect, useState, useCallback} from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import ProductDrawer from '../drawer/ProductDrawer'
import ProductContext from '../../contexts/ProductContext'
import ProductListing from '../product-listing/ProductListing'

const ProductType = () => {
  let params = useParams();
  const {state: {filteredProducts}, productDispatch: {productFilter}} = useContext(ProductContext);
  console.log('productType')
  useEffect(() => {
    const createFilters = async () => {
      const getParams = await Object.values(params);
      productFilter(getParams);
    }
    createFilters()
  }, [])

  return (
    <>
      {!filteredProducts && <Typography variant = 'h3'>...Loading</Typography>}
      <Box sx = {{display: 'flex', justifyContent: 'flex-start'}}>
        {
          filteredProducts &&  <>
            <ProductDrawer catagoryTitle = {params.product} />
            <ProductListing products = {filteredProducts} />
          </>
        }
      </Box>
    </>
  )
}

export default ProductType;
