import SelectOption from '../../common/Components/SelectOption';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'

import productOrderFieldsProps from '../Atters/productOrderFieldsProps'

const ProductOrderFields = ({fieldProps}) => {

  return (
    <>
      <TextField
        fullWidth = {true}
        id = {fieldProps.textFieldId}
        name = {fieldProps.textFieldName}
        label= {fieldProps.textFieldLabel}
        value = {fieldProps.formik.values.qty}
        onChange = {fieldProps.formik.handleChange}
        error = {fieldProps.formik.touched.qty && Boolean(fieldProps.formik.errors.qty)}
        helperText = {fieldProps.formik.touched.qty && fieldProps.formik.errors.qty}
      />
      <SelectOption
        fullWidth = {true}
        id = {fieldProps.selectOptionId}
        name = {fieldProps.selectOptionName}
        label = {fieldProps.selectOptionLabel}
        labelId = {fieldProps.selectOptionLabelId}
        value = {fieldProps.formik.values.option}
        handleChange = {fieldProps.formik.handleChange}
        touched = {fieldProps.formik.touched.option}
        errors = {fieldProps.formik.errors.option}
        options = {fieldProps.options}
      />
      <Button {...productOrderFieldsProps.submitButtonProps}>{fieldProps.submitButtonText}</Button>
    </>
  )
}

export default ProductOrderFields;
