import Box from '@mui/material/Box'

import useFindProductHook from '../Hooks/FindProductHook'
import ProductOrder from './ProductOrder'
import Product from '../../Products/Components/Product'
import Img from '../../Products/Components/Img'

import productOrderContainerProps from '../Atters/productOrderContainerProps'

const ProductOrderContainer = () => {
  const {product} = useFindProductHook()
  return(
    <>
      <Box {...productOrderContainerProps.containerBox}>
        {
          product && <Box {...productOrderContainerProps.productBox}>
              <Product product = {product} >
                <Img title = {product.title}/>
              </Product>
              <ProductOrder product = {product.createProductOrder()} />
            </Box>
        }
        {
          !product && <h1>...LoadingProduct</h1>
        }
      </Box>
    </>
  )
}
export default ProductOrderContainer
