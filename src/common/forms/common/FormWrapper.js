import Box from '@mui/material/Box'
import Button from '@mui/material/Button';

import React from 'react'


const FormWrapper = ({orderUI, ...props}) => {
  const {formik, ...rest} = orderUI(props)
  if(formik && rest){
    return (
      <>
        <form onSubmit = {formik.handleSubmit}>
          <Box sx = {{width: '100%', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            {
              React.Children.map(props.children, (child, index) => {
                return React.cloneElement(child, {formik, index, ...rest})
              })
            }
          </Box>
        </form >
      </>
    )
  }else{
    return(
      <h1>...Loading</h1>
    )
  }
}

export default FormWrapper;
