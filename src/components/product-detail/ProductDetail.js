import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Product from '../product/Product';
import ProductSpec from '../product-spec/ProductSpec';
import ProductContext from '../../contexts/ProductContext'
import addToCartSubmitFunction from '../forms/add-to-cart/addToCartSubmitFunction'

import AddToCart from '../forms/add-to-cart/AddToCart'

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
          <Box sx = {{ mt: 3, height: '60vh', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: {xs: 'row', md: 'row'}}}>
            <Product productTitle = {productDetails.title} productPrice = {productDetails.price} />
            <AddToCart
              product = {productDetails}
              buttonText = {'Add to Cart'}
              initialValues = {{
                qty: 0,
                productName: productDetails.title,
                option: productDetails.options[0],
                productPrice: productDetails.price
              }}
              submitFunction = {{addToCartSubmitFunction}}
            />
          </Box>
        </>
      }
    </>
  )
}

export default ProductDetail;
