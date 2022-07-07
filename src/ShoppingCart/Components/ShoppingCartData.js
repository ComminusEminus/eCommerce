import Typography from '@mui/material/Typography'

import shoppingCartDataAtters from '../Atters/shoppingCartDataAtters'

const ShoppingCartData = ({total}) => {

  return(
    <>
      <Typography {...shoppingCartDataAtters.data}>
        ${total}
      </Typography>
    </>
  )
}

export default ShoppingCartData
