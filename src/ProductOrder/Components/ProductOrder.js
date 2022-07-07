import FormWrapper from '../../common/Components/FormWrapper'
import ProductOrderFields from './ProductOrderFields'
import useFormHook from '../Hooks/FormHook'

import Button from '@mui/material/Button'

const ProductOrder = ({product}) => {
  const {formik, productOrder} = useFormHook(product)
  if(formik && productOrder){
    const fieldProps = {
      formik: formik,
      textFieldName: 'qty',
      textFieldLabel: 'Quantity',
      selectOptionId: 'option',
      selectOptionName: 'option',
      selectOptionLabel: `${productOrder.optionTitle}`,
      options: productOrder.optionArray,
      selectOptionLabelId: 'product-option-label',
      submitButtonText: 'Submit'
    }
    return (
      <>
        <FormWrapper handleSubmit = {formik.handleSubmit}>
          <ProductOrderFields fieldProps = {fieldProps} />
        </FormWrapper>
      </>
    )
  }else{
    return(
      <h1> ...Loading</h1>
    )
  }

}
export default ProductOrder
