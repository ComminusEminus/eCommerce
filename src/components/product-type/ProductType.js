import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from 'react'

import Typography from '@mui/material/Typography'

import ProductDrawer from '../drawer/ProductDrawer'
import ProductContext from '../../contexts/ProductContext'
import ProductListing from '../product-listing/ProductListing'

const ProductType = () => {
  let params = useParams();
  const {state: {filteredProducts}, productDispatch: {productFilter}} = useContext(ProductContext);
  useEffect(() => {
    let filterTerms = Object.values(params);
    productFilter(filterTerms);
  }, [params])
  return (
    <>
      {!filteredProducts && <Typography variant = 'h3'>...Loading</Typography>}
      {
        filteredProducts &&  <>
          <ProductDrawer catagoryTitle = {params.product} />
          <ProductListing products = {filteredProducts} />
        </>
      }
    </>
  )
}

export default ProductType;
