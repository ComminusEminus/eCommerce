import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import PropTypes from "prop-types";
import { useFormik, withFormik, Formik, Form, Field } from 'formik';
import {useState} from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';


import addToCartValidSchema from './addToCartValidSchema'

const AddToCart = ({initialValues, submitFunction, valSchema, buttonText, ...props}) => {

  const navigate = useNavigate();
  console.log(initialValues)
  console.log(valSchema)
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: valSchema,
    onSubmit: (values) => {
      submitFunction(initialValues, values)
      navigate('/Cart')
    }
  })
  return (
    <>
      <Box sx = {{height: '100%', width: '100%', flexGrow: 1, display: 'flex', flexDirection:'column', justifyContent:'center'}}>
        <form onSubmit = {formik.handleSubmit}>
          {
            React.Children.map(props.children, (child, index) => {
              return React.cloneElement(child, {formik, initialValues, index})
            })
          }
          <Button type = 'submit' variant="contained" sx = {{width: '100%'}}>{buttonText}</Button>
        </form >
      </Box>
    </>
    )
}
export default AddToCart;
