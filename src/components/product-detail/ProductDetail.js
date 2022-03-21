import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Product from '../product/Product';
import ProductSpec from '../product-spec/ProductSpec';
import ProductContext from '../../contexts/ProductContext'

import { useParams } from "react-router-dom";
import {useContext, useEffect, useState} from 'react'

const ProductDetail = ({productId}) => {
  let params = useParams();
  const {state: {productDetails}, productDispatch: {getProductDetails}} = useContext(ProductContext);

  useEffect(() => {
    console.log(params)
    getProductDetails(params.detail)
  }, [params])

  return (
    <>
      {!productDetails && <Typography variant = 'h3'>...Loading</Typography>}
      {
        productDetails && <>
          <Box sx = {{display: 'flex', flexDirection: {xs: 'row', md: 'column'}, justifyContent: {xs: 'center', md: 'center'}, alignContent: {xs: 'center', md: 'center'} }}>
            <Product productTitle = {productDetails.title} productPrice = {productDetails.price} />
            <ProductSpec product = {productDetails} />
          </Box>
        </>
      }
    </>
  )
}

export default ProductDetail;
