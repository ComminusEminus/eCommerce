import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import PropTypes from "prop-types";
import { useFormik, withFormik, Formik, Form, Field } from 'formik';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import addItemToLocalStorage from '../../../helpers/addItemToLocalStorage';
import createNewCartItem from '../../../helpers/createNewCartItem'
import addToCartValidSchema from './addToCartValidSchema'
import addToCartInitialValue from './addToCartInitialValue'
import addToCartSubmitFunction from './addToCartSubmitFunction'
import SelectOptionComponent from '../common-form/select';
import QtyInput from '../common-form/qtyInput';

const HiddenInput = ({ field, form, ...props }) => {
  return(
    <input
      {...field}
      {...props}
    />
  )
}


const AddToCart = ({product, buttonText, initialValues, submitFunction, children}) => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx = {{height: '100%', width: '100%', flexGrow: 1, display: 'flex', flexDirection:'column', justifyContent:'center'}}>
        <Formik
          onSubmit = {
            (values) => {
              submitFunction(values.productName, values.qty, values.productPrice, values.option, navigate('/Cart'))
            }
          }
          initialValues = {initialValues}
          validationSchema = {addToCartValidSchema}
        >
          {
            ({errors, values, touched, handleChange, handleSubmit}) => (
              <Form>
                {children}
                <Box sx = {{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                  <Field
                    id = 'productName'
                    name = 'productName'
                    type = "hidden"
                    value = {values.item}
                    component = {HiddenInput}
                  />
                  <Field
                    id = 'productPrice'
                    name = 'productPrice'
                    type = "hidden"
                    value = {values.price}
                    component = {HiddenInput}
                  />
                  <QtyInput
                    id = {'qty'} //"qty"
                    name = {'qty'}//"qty"
                    label= {'Quantity'} //"Quantity"
                    value = {values.qty} //{values.qty}
                    onChange = {handleChange}
                    error = {touched && Boolean(errors)} //{touched.qty && Boolean(errors.qty)}
                    helperText = {touched && errors} //{touched.qty && errors.qty}
                    sx = {{width: '90%'}}
                  />
                  <SelectOptionComponent
                    id = {'option'}
                    name = {'option'}
                    label = {'Option'}
                    labelId = {"product-option-label"}
                    values = {values.option}
                    handleChange = {handleChange}
                    touched = {touched.option}
                    errors = {errors.option}
                    product = {product.options}
                  />
                </Box>
                <Button type = 'submit' variant="contained" sx = {{width: '100%'}}>{buttonText}</Button>
              </Form>
            )
          }
        </Formik>
      </Box>
    </>
  )
}
/*
<SelectOptionComponent
  id = {'option'}
  name = {'option'}
  label = {'Option'}
  labelId = {"product-option-label"}
  values = {values.option}
  handleChange = {handleChange}
  touched = {touched.option}
  errors = {errors.option}
  product = {product}
/>
  <QtyInput
    id = {"qty"}
    name = {"qty"}
    label = {'Quantity'}
    values = {values.qty}
    handleChange = {handleChange}
    touched = {touched.qty}
    errors = {errors.qty}
  />
  <input
    id = 'productName'
    name = 'productName'
    type = "hidden"
    value = {values.item}
  />
  <input
    id = 'productPrice'
    name = 'productPrice'
    type = "hidden"
    value = {values.price}
  />
*/
export default AddToCart;
