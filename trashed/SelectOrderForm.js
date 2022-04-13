import Box from '@mui/material/Box'
import Button from '@mui/material/Button';

import React from 'react'


const SelectOrderForm = ({orderUI, ...props}) => {
  const {formik, formMaterials} = orderUI()
  const optionList = formMaterials.options;
  return (
    <>
      <form onSubmit = {formik.handleSubmit}>
        {
          React.Children.map(props.children, (child, index) => {
            return React.cloneElement(child, {formik, optionList, index})
          })
        }
        <Button type = 'submit' variant="contained" sx = {{width: '100%'}}>{formMaterials.buttonText}</Button>
      </form >
    </>
  )
}

export default SelectOrderForm;
