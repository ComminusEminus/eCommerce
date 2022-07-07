import TextField from '@mui/material/TextField'
import customerFormFieldProps from '../Atters/customerFormFieldProps'

const ShippingFormFields = ({formik}) => {
  const {shippingFormProps} = customerFormFieldProps

  if(formik){
    return(
      <>
        <TextField
          sx = {{width: '40%', mr: 2, mb:3 }}
          id = {shippingFormProps.firstname.id}
          name = {shippingFormProps.firstname.name}
          label= {shippingFormProps.firstname.label}
          value = {formik.values.firstname}
          onChange = {formik.handleChange}
          error = {formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText = {formik.touched.firstname && formik.errors.firstname}
        />
        <TextField
          sx = {{width: '40%', mr: 2, mb:3 }}
          id = {shippingFormProps.lastname.id}
          name = {shippingFormProps.lastname.name}
          label= {shippingFormProps.lastname.label}
          value = {formik.values.lastname}
          onChange = {formik.handleChange}
          error = {formik.touched.lastname && Boolean(formik.errors.lastname)}
          helperText = {formik.touched.lastname && formik.errors.lastname}
        />
        <TextField
          sx = {{width: '30%', mr: 2, mb:3 }}
          id = {shippingFormProps.streetaddress.id}
          name = {shippingFormProps.streetaddress.name}
          label= {shippingFormProps.streetaddress.label}
          value = {formik.values.streetaddress}
          onChange = {formik.handleChange}
          error = {formik.touched.streetaddress && Boolean(formik.errors.streetaddress)}
          helperText = {formik.touched.streetaddress && formik.errors.streetaddress}
        />
        <TextField
          sx = {{width: '10%', mr: 2, mb:3 }}
          id = {shippingFormProps.aptnumber.id}
          name = {shippingFormProps.aptnumber.name}
          label= {shippingFormProps.aptnumber.label}
          value = {formik.values.aptnumber}
          onChange = {formik.handleChange}
          error = {formik.touched.qty && Boolean(formik.errors.aptnumber)}
          helperText = {formik.touched.aptnumber && formik.errors.aptnumber}
        />
        <TextField
          sx = {{width: '15%', mr: 2, mb:3 }}
          id = {shippingFormProps.city.id}
          name = {shippingFormProps.city.name}
          label= {shippingFormProps.city.label}
          value = {formik.values.city}
          onChange = {formik.handleChange}
          error = {formik.touched.city && Boolean(formik.errors.city)}
          helperText = {formik.touched.city && formik.errors.city}
        />
        <TextField
          sx = {{width: '10%', mr: 2, mb:3 }}
          id = {shippingFormProps.state.id}
          name = {shippingFormProps.state.name}
          label= {shippingFormProps.state.label}
          value = {formik.values.state}
          onChange = {formik.handleChange}
          error = {formik.touched.state && Boolean(formik.errors.state)}
          helperText = {formik.touched.state && formik.errors.state}
        />
        <TextField
          sx = {{width: '10%', mr: 2, mb:3 }}
          id = {shippingFormProps.zip.id}
          name = {shippingFormProps.zip.name}
          label= {shippingFormProps.zip.label}
          value = {formik.values.zip}
          onChange = {formik.handleChange}
          error = {formik.touched.zip && Boolean(formik.errors.zip)}
          helperText = {formik.touched.zip && formik.errors.zip}
        />
        <TextField
          sx = {{width: '15%', mr: 2, mb:3 }}
          id = {shippingFormProps.phone.id}
          name = {shippingFormProps.phone.name}
          label= {shippingFormProps.phone.label}
          value = {formik.values.phone}
          onChange = {formik.handleChange}
          error = {formik.touched.phone && Boolean(formik.errors.phone)}
          helperText = {formik.touched.phone && formik.errors.phone}
        />
        <TextField
          sx = {{width: '20%', mr: 2, mb:3 }}
          id = {shippingFormProps.email.id}
          name = {shippingFormProps.email.name}
          label= {shippingFormProps.email.label}
          value = {formik.values.email}
          onChange = {formik.handleChange}
          error = {formik.touched.email && Boolean(formik.errors.email)}
          helperText = {formik.touched.email && formik.errors.email}
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

export default ShippingFormFields
