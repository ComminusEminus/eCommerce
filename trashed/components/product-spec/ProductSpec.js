import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import AddToCart from '../forms/add-to-cart/AddToCart'
/*import addItemToLocalStorage from '../../helpers/addItemToLocalStorage';
import createNewCartItem from '../../helpers/createNewCartItem'
import addToCartValidSchema from '../forms/addToCartValidSchema'*/

const ProductSpec = ({product}) => {

  return (
    <>
      <Box sx = {{pt:5, height: '100%', width: '25vw', display: 'flex', flexDirection:'column', justifyContent: 'center', alignContent: 'flex-start' }}>
        <Box sx = {{flexGrow: 0, display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
          <Typography variant = 'h4'>
            {product.description}
          </Typography>
        </Box>
        <AddToCart product = {product} buttonText = {'Add to Cart'}  />
      </Box>
    </>
  )
}
/*
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


*/
export default ProductSpec;
