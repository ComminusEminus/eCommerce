import Box from '@mui/material/Box';

import { useFormik, withFormik, Formik, Form, Field } from 'formik';

import SelectOptionComponent from '../common-form/select';
import QtyInput from '../common-form/qtyInput';

const AddToCartFields = ({...props}) => {
  return (
    <>
      <QtyInput
        key = {`${props.index}-qty-key`}
        id = {'qty'} //"qty"
        name = {'qty'}//"qty"
        label= {'Quantity'} //"Quantity"
        value = {props.formik.values.qty} //{values.qty}
        handleChange = {props.formik.handleChange}
        error = {props.formik.touched.qty && Boolean(props.formik.errors.qty)} //{touched.qty && Boolean(errors.qty)}
        helperText = {props.formik.touched.qty && props.formik.errors.qty} //{touched.qty && errors.qty}
        sx = {{width: '90%'}}
      />
      <SelectOptionComponent
        key = {`${props.index}-options-key`}
        id = {'option'}
        name = {'option'}
        label = {'Option'}
        labelId = {"product-option-label"}
        value = {props.formik.values.selectOption}
        handleChange = {props.formik.handleChange}
        touched = {props.formik.touched.option}
        errors = {props.formik.errors.option}
        options = {props.initialValues.option}
      />
    </>
  )
}

export default AddToCartFields;
