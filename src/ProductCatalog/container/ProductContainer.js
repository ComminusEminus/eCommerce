import {ProductLayout, useProductUI} from '../index'

import {useContext, useEffect} from 'react'

const ProductContainer = () => {
  const {products, detailView} = useProductUI()

  return (
    <>
      <ProductLayout products = {products} view = {detailView}/>
    </>
  )
}


export default ProductContainer;
