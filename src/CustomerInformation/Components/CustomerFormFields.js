import ShippingFormFields from './ShippingFormFields'
import BillingFormFields from './BillingFormFields'
import CardFormFields from './CardFormFields'
import customerFormFieldsAtters from '../Atters/customerFormFieldsAtters'

import Box from '@mui/material/Box'

const CustomerFormFields = ({formik}) => {

  return(
    <>
      {
        formik &&
        <>
          <Box {...customerFormFieldsAtters.containingBox}>
            <Box {...customerFormFieldsAtters.shippingBox}>
              <ShippingFormFields formik = {formik}  />
            </Box>
            <Box {...customerFormFieldsAtters.billingBox}>
              <BillingFormFields formik = {formik} />
            </Box>
            <Box {...customerFormFieldsAtters.cardBox}>
              <CardFormFields formik = {formik} />
            </Box>
          </Box>
        </>
      }
      {
        !formik && <h1>...Loading</h1>
      }
    </>
  )
}

export default CustomerFormFields
