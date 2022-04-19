import {ProductLayout, useProductUI} from '../index'

/*
  Container for displaying all products and information about products,
  All logic is decoupled into ui-logic folder same for all componenets

  useProductUI fetches product information from db server then sends to reducer
  for formatting into array of objects to be consumed by the product presentation.
*/


const ProductContainer = () => {
  const {products, detailView} = useProductUI()
  return (
    <>
      <ProductLayout products = {products} view = {detailView}/>
    </>
  )
}


export default ProductContainer;
