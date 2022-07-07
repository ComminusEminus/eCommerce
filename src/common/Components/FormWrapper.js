import Box from '@mui/material/Box'

import formWrapperProps from '../Atters/formWrapperProps'

const FormWrapper = ({handleSubmit, children}) => {
  return(
    <>
      <form onSubmit = {handleSubmit}>
        <Box {...formWrapperProps.boxProps}>
          {children}
        </Box>
      </form>
    </>
  )
}

export default FormWrapper
