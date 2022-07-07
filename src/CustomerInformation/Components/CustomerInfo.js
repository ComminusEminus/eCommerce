import FormWrapper from '../../common/Components/FormWrapper'
import useCustomerInfoFormHook from '../Hooks/CustomerInfoFormHook'
import CustomerFormFields from './CustomerFormFields'
import customerInfoAtters from '../Atters/customerInfoAtters'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const CustomerInfo = ({customerFormInstance}) => {

  const {formik} = useCustomerInfoFormHook(customerFormInstance)

  if(formik){
    return(
      <>
        <FormWrapper handleSubmit = {formik.handleSubmit}>
          <CustomerFormFields formik = {formik} />
          <Box {...customerInfoAtters.boxProps}>
            <Button {...customerInfoAtters.buttonProps}>
              Submit
            </Button>
          </Box>

        </FormWrapper>
      </>
    )
  }else{
    return(
      <>
        <h1> ...Loading</h1>
      </>
    )
  }

}

export default CustomerInfo
