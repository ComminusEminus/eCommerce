import TextField from '@mui/material/TextField'
import customerFormFieldProps from '../Atters/customerFormFieldProps'

const BillngFormFields = ({formik}) => {
  const {billingFormProps} = customerFormFieldProps
  if(formik){
    return(
      <>
        <TextField
          sx = {{width: '40%', mr: 2, mb:3 }}
          id = {billingFormProps.cardfirstname.id}
          name = {billingFormProps.cardfirstname.name}
          label= {billingFormProps.cardfirstname.label}
          value = {formik.values.cardfirstname}
          onChange = {formik.handleChange}
          error = {formik.touched.cardfirstname && Boolean(formik.errors.cardfirstname)}
          helperText = {formik.touched.cardfirstname && formik.errors.cardfirstname}
        />
        <TextField
          sx = {{width: '40%', mr: 2, mb:3 }}
          id = {billingFormProps.cardlastname.id}
          name = {billingFormProps.cardlastname.name}
          label= {billingFormProps.cardlastname.label}
          value = {formik.values.cardlastname}
          onChange = {formik.handleChange}
          error = {formik.touched.cardlastname && Boolean(formik.errors.cardlastname)}
          helperText = {formik.touched.cardlastname && formik.errors.cardlastname}
        />
        <TextField
          sx = {{width: '30%', mr: 2, mb:3 }}
          id = {billingFormProps.cardaddress.id}
          name = {billingFormProps.cardaddress.name}
          label= {billingFormProps.cardaddress.label}
          value = {formik.values.cardaddress}
          onChange = {formik.handleChange}
          error = {formik.touched.cardaddress && Boolean(formik.errors.cardaddress)}
          helperText = {formik.touched.cardaddress && formik.errors.cardaddress}
        />
        <TextField
          sx = {{width: '10%', mr: 2, mb:3 }}
          id = {billingFormProps.cardaptnumber.id}
          name = {billingFormProps.cardaptnumber.name}
          label= {billingFormProps.cardaptnumber.label}
          value = {formik.values.cardaptnumber}
          onChange = {formik.handleChange}
          error = {formik.touched.cardaptnumber && Boolean(formik.errors.cardaptnumber)}
          helperText = {formik.touched.cardaptnumber && formik.errors.cardaptnumber}
        />
        <TextField
          sx = {{width: '15%', mr: 2, mb:3 }}
          id = {billingFormProps.cardcity.id}
          name = {billingFormProps.cardcity.name}
          label= {billingFormProps.cardcity.label}
          value = {formik.values.cardcity}
          onChange = {formik.handleChange}
          error = {formik.touched.cardcity && Boolean(formik.errors.cardcity)}
          helperText = {formik.touched.cardcity && formik.errors.cardcity}
        />
        <TextField
          sx = {{width: '10%', mr: 2, mb:3 }}
          id = {billingFormProps.cardstate.id}
          name = {billingFormProps.cardstate.name}
          label= {billingFormProps.cardstate.label}
          value = {formik.values.cardstate}
          onChange = {formik.handleChange}
          error = {formik.touched.cardstate && Boolean(formik.errors.cardstate)}
          helperText = {formik.touched.cardstate && formik.errors.cardstate}
        />
        <TextField
          sx = {{width: '10%', mr: 2, mb:3 }}
          id = {billingFormProps.cardzip.id}
          name = {billingFormProps.cardzip.name}
          label= {billingFormProps.cardzip.label}
          value = {formik.values.cardzip}
          onChange = {formik.handleChange}
          error = {formik.touched.cardzip && Boolean(formik.errors.cardzip)}
          helperText = {formik.touched.cardzip && formik.errors.cardzip}
        />
      </>
    )
  }else{
    return (
      <>
        <h1> ...Loading </h1>
      </>
    )
  }
}

export default BillngFormFields
