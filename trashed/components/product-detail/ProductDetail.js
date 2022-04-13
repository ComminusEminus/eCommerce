import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Product from '../product/Product';
import ProductContext from '../../contexts/ProductContext'

import CreateProduct from '../../helpers/product/product'
import composeAddtoCart from '../../helpers/composeCart'
import AddToCart from '../forms/add-to-cart/AddToCart'
import AddToCartFields from '../forms/add-to-cart/addToCartFields'
import addToCartValidSchema from '../forms/add-to-cart/addToCartValidSchema'
import { useParams } from "react-router-dom";
import {useContext, useEffect, useState, useCallback} from 'react'

const ProductDetail = ({productId}) => {
  let params = useParams();
  const {state: {productDetails}, productDispatch: {getProductDetails}} = useContext(ProductContext);

  useEffect(() => {
    getProductDetails(params.detail)
    console.log(productDetails)
  }, [params]);


  return (
    <>
      {!productDetails && <Typography variant = 'h3'>...Loading</Typography>}
      {
        productDetails && <>
          <Box sx = {{ mt: 3, height: '60vh', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: {xs: 'row', md: 'row'}}}>
            <Product productTitle = {productDetails.title} productPrice = {productDetails.price} />
            <AddToCart
              buttonText = {'Add to Cart'}
              initialValues = {productDetails}
              submitFunction = {composeAddtoCart}
              valSchema = {addToCartValidSchema}
            >
              <AddToCartFields />
            </AddToCart>
          </Box>
        </>
      }
    </>
  )
}
/*
initialValues = {{
  qty: 0,
  title: productDetails.title,
  option: productDetails.options[0],
  price: productDetails.price,
  id: productDetails.id
}}
*/
export default ProductDetail;
