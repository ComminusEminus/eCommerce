import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Img from './Img'
import productAtters from '../Atters/productAtters'

const Product = ({children, product}) => {
  const {price, title, description} = product
  return(
    <>
      <Box {...productAtters.containerBoxProps}>
        {children}
        <Box {...productAtters.descriptionBoxProps}>
          <Typography {...productAtters.priceText} >
            {price}
          </Typography >
          <Typography {...productAtters.titleText} >
            {title}
          </Typography >
          <Typography {...productAtters.descriptionText} >
            {description}
          </Typography>
        </Box>
      </Box>
    </>
  )
}
export default Product
