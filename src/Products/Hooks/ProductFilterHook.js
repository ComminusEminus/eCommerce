import {useState, useContext, useMemo, useEffect} from 'react'

import filterUtility from '../Util/filterUtility'
import ProductContext from '../Provider/ProductContext'

const useProductFilter = (props) => {
  const {state: {allProducts}, dispatch, actions} = useContext(ProductContext)
  
  const filteredProducts = useMemo(() => {
    if(allProducts.hasOwnProperty('list')){
      return allProducts.filterProducts(props)
    }
  }, [props, allProducts])

  return {filteredProducts};
}
export default useProductFilter
