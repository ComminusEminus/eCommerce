import TextField from '@mui/material/TextField'
import customerFormFieldProps from '../Atters/customerFormFieldProps'

const CardFormFields = ({formik}) => {
  const {cardFormProps} = customerFormFieldProps

  if(formik){
    return(
      <>
        <TextField
          sx = {{width: '40%', mr: 3, mb: 2}}
          id = {cardFormProps.cardnumber.id}
          name = {cardFormProps.cardnumber.name}
          label= {cardFormProps.cardnumber.label}
          value = {formik.values.cardnumber}
          onChange = {formik.handleChange}
          error = {formik.touched.cardnumber && Boolean(formik.errors.cardnumber)}
          helperText = {formik.touched.cardnumber && formik.errors.cardnumber}
        />
        <TextField
          sx = {{width:'25%', mr: 3, mb: 2}}
          id = {cardFormProps.cardsecuritycode.id}
          name = {cardFormProps.cardsecuritycode.name}
          label= {cardFormProps.cardsecuritycode.label}
          value = {formik.values.cardsecuritycode}
          onChange = {formik.handleChange}
          error = {formik.touched.cardsecuritycode && Boolean(formik.errors.cardsecuritycode)}
          helperText = {formik.touched.cardsecuritycode && formik.errors.cardsecuritycode}
        />
        <TextField
          sx = {{width: '30%', mr: 3, mb: 2}}
          id = {cardFormProps.cardexp.id}
          name = {cardFormProps.cardexp.name}
          label= {cardFormProps.cardexp.label}
          value = {formik.values.cardexp}
          onChange = {formik.handleChange}
          error = {formik.touched.cardexp && Boolean(formik.errors.cardexp)}
          helperText = {formik.touched.cardexp && formik.errors.cardexp}
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

export default CardFormFields
