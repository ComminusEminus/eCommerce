import useProductFilter from '../Hooks/ProductFilterHook'
import productListAtters from '../Atters/productListAtters'
import LinkBehavior from '../../common/Components/LinkBehavior'


import Product from './Product'
import Box from '@mui/material/Box'
import Img from './Img'
import Link from '@mui/material/Link'


const ProductList = ({filter}) => {
  let {filteredProducts} = useProductFilter(filter)
  return(
    <>
      <Box {...productListAtters.boxProps}>
        {
          filteredProducts && filteredProducts.map((product) => {
            return(
                <Link
                  key = {product.id}
                  component = {LinkBehavior}
                  underline="none"
                  to = {`/order/${product.title}`}
                >
                  <Product product = {product} >
                    <Img title = {product.title}/>
                  </Product>
                </Link>
            )
          })
        }
        {
          !filteredProducts && <h1>...Loading</h1>
        }
      </Box>
    </>
  )
}

export default ProductList
