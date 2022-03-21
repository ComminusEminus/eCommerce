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
import addToCartValidSchema from '../forms/addToCartValidSchema'

const ProductSpec = ({product}) => {
  const navigate = useNavigate();

  const initialValues = {
    qty: 0,
    option: product.options[0],
    productName: product.title,
    productPrice: product.price
  }
  const productOnSubmit = (values) => {
    addItemToLocalStorage(values.productName, values.qty, values.productPrice, values.option)
    navigate('/Cart')
  }
  return (
    <>
      <Box sx = {{display: 'flex', flexDirection:'column', justifyContent: 'flex-end', alignContent: 'flex-end' }}>
        <Box sx = {{display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
          <Typography variant = 'subtitle1'>
            {product.description}
          </Typography>
        </Box>
        <Formik onSubmit = {productOnSubmit} initialValues = {initialValues} validationSchema = {addToCartValidSchema}>
          {
            ({errors, values, touched, handleChange, handleSubmit}) => (
              <form onSubmit = {handleSubmit}>
                <FormControl sx={{ m: 1, width: 300 }}>
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
                <Button type = 'submit' variant="contained">Add To Cart</Button>
              </form>
            )
          }
        </Formik>
      </Box>
    </>
  )
}

export default ProductSpec;
