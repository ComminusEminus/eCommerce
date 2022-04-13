import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const shoppingCartHeader = ['Item','Qty', 'Price', 'Total']

const ShoppingCartHeaderLayout = () => {
  const gridItemSpacing = 3;
  return(
    <>
      {
        shoppingCartHeader.map((title) => {
          return(
            <Grid key = {`header-${title}`} item xs = {gridItemSpacing}>
              <Box sx ={{pt:2, pl:3, width:'100%', height:'100%', bgcolor: 'primary.main'}}>
                <Typography variant = "h3" sx={{color:'white'}}>
                  {title}
                </Typography>
              </Box>
            </Grid>
          )
        })
      }
    </>
  )
}

export default ShoppingCartHeaderLayout;
