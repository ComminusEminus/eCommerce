import Box from '@mui/material/Box'

import ProductListContainer from '../Products/Components/ProductListContainer'

const HomePage = () => {

  return(
    <Box>
      <ProductListContainer filter = {'All Products'} />
      <ProductListContainer filter = {'Mens'} />
    </Box>
  )
}
export default HomePage
