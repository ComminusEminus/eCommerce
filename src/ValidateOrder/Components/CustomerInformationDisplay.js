import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {Fragment} from 'react'
import customerInformationDisplayAtters from '../Atters/customerInformationDisplayAtters'

const CustomerInformationDisplay = ({customerFormValues}) => {
  if(customerFormValues){
    return(
      <>
        <Box {...customerInformationDisplayAtters.containerBox}>
          {
            Object.entries(customerFormValues).map(([key, value], index) => {
              return(
                <Box key = {`cutomer-info-${key}-${value}-${index}`} {...customerInformationDisplayAtters.itemBox}>
                  <Typography {...customerInformationDisplayAtters.keyText}>
                    {key}
                  </Typography>
                  <Typography {...customerInformationDisplayAtters.valueText}>
                    {value}
                  </Typography>
                </Box>
              )
            })
          }
        </Box>
      </>
    )
  }else{
    return(
      <>
        <h1>...Loading</h1>
      </>
    )
  }
}

export default CustomerInformationDisplay
