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
import { useFormik, withFormik, Formik } from 'formik';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import addItemToLocalStorage from '../../helpers/addItemToLocalStorage';
import createNewCartItem from '../../helpers/createNewCartItem'
import addToCartValidSchema from './addToCartValidSchema'

const AddToCartForm = ({product, closeModel}) => {
  const navigate = useNavigate();
  const initialValues = {
      qty: qty,
      option: product.options,
      productName: product.title,
      productPrice: product.price
  }
  const productOnSubmit = (values) => {
    addItemToLocalStorage(values.productName, values.qty, values.productPrice, values.option)
    localStorage.getItem('cart')
  }
  return (
    <>
      <Box sx = {{pt:5, height: '100%', width: '25vw', display: 'flex', flexDirection:'column', justifyContent: 'center', alignContent: 'flex-start' }}>
        <Box sx = {{height: '100%', width: '100%', flexGrow: 1, display: 'flex', flexDirection:'column', justifyContent:'center'}}>
          <Formik onSubmit = {productOnSubmit} initialValues = {initialValues} validationSchema = {addToCartValidSchema}>
            {
              ({errors, values, touched, handleChange, handleSubmit}) => (
                <form onSubmit = {handleSubmit}>
                  <Box sx = {{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <FormControl sx={{ width: "90%", mb: 2}}>
                      <InputLabel id={`product-option-label`}>Options</InputLabel>
                      <Select
                        labelId="product-option-label"
                        id= 'option'
                        name = 'option'
                        value= {values.option}
                        onChange = {handleChange}
                        error = {touched.option && Boolean(errors.option)}

                        input={<OutlinedInput label= "Option" />}
                      >
                        {
                          product.options.map((option) => (
                            <MenuItem
                              key={option}
                              value={option}
                            >
                              {option}
                            </MenuItem>
                          ))
                        }
                      </Select>
                    </FormControl>
                    <TextField
                      id = "qty"
                      name = "qty"
                      label="Quantity"
                      value = {values.qty}
                      onChange = {handleChange}
                      error = {touched.qty && Boolean(errors.qty)}
                      helperText = {touched.qty && errors.qty}
                      sx = {{width: '90%'}}
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
                  </Box>
                  <Button type = 'submit' variant="contained" sx = {{width: '100%'}}>Add To Cart</Button>
                </form>
              )
            }
          </Formik>
        </Box>
      </Box>
    </>
  )
}

export default AddToCartForm;
