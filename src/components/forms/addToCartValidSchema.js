import * as yup from 'yup';

const addToCartValidSchema = yup.object({
  qty: yup
    .number('Enter Quantity of Product')
    .min(1, 'Minimum Order Quantity is 1')
    .max(10, 'Maximum Order Quantity is 10')
    .required('Quantity is Required'),
  option: yup
    .string()
    .required(),
  productName: yup
    .string()
    .required(),
  productPrice: yup
    .number()
    .required()
})

export default addToCartValidSchema;
