import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import MapCustomerInformation from './MapCustomerInformation'
import Box from '@mui/material/Box'

const DisplayCustomerInformation = ({children}) => {

  return (
    <>
      <Box sx = {{width: '100%', px:3}}>
        <Grid spacing = {0} container>
          {children}
        </Grid>
      </Box>
    </>
  )

}

export default DisplayCustomerInformation;
