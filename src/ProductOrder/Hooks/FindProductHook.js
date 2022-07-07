import {useState, useContext, useEffect, useMemo} from 'react'
import { useParams } from "react-router-dom";


import ProductContext from '../../Products/Provider/ProductContext'

const useFindProductHook = () => {
  const {dispatch, actions, state: {allProducts}} = useContext(ProductContext)
  const {title} = useParams();
  const product = useMemo(() => {
    if(allProducts.hasOwnProperty('list')){
      return allProducts.getItem('title', title)
    }
  }, [title])

  return {product}
}
export default useFindProductHook
