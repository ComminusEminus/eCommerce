import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import customerInformationDisplayAtters from '../Atters/customerInformationDisplayAtters'
import useEditOrderHook from '../Hooks/EditOrderHook'



const CustomerInformationDisplay = ({customerFormValues}) => {
  const {editInfoHandler} = useEditOrderHook()

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
        <Box {...customerInformationDisplayAtters.editInfoBox}>
          <Button onClick = {editInfoHandler} {...customerInformationDisplayAtters.editInfoButton}>
            Edit
          </Button>
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
