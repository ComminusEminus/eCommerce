import SelectOptionComponent from './select';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'

const SelectOrderFields = (props) => {
  return (
    <>
      <TextField
        fullWidth = {true}
        key = {`${props.index}-qty-key`}
        id = {'qty'} //"qty"
        name = {'qty'}//"qty"
        label= {'Quantity'} //"Quantity"
        value = {props.formik.values.qty} //{values.qty}
        onChange = {props.formik.handleChange}
        error = {props.formik.touched.qty && Boolean(props.formik.errors.qty)} //{touched.qty && Boolean(errors.qty)}
        helperText = {props.formik.touched.qty && props.formik.errors.qty} //{touched.qty && errors.qty}
        sx = {{width: 'auto', mb:5, alignSelf: 'flex-end'}}
      />
      <SelectOptionComponent
        fullWidth = {true}
        key = {`${props.index}-options-key`}
        id = {'option'}
        name = {'option'}
        label = {'Option'}
        labelId = {"product-option-label"}
        value = {props.formik.values.option}
        handleChange = {props.formik.handleChange}
        touched = {props.formik.touched.option}
        errors = {props.formik.errors.option}
        options = {props.formMaterials.options}
      />
      <Button type = 'submit' variant = 'contained' sx ={{alignSelf: 'flex-end'}}>{props.formMaterials.buttonText}</Button>
    </>
  )
}

export default SelectOrderFields;
