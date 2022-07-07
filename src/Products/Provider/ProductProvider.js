import ProductContext from './ProductContext'
import actions from '../Reducer/actions'
import productReducer from '../Reducer/ProductReducer'
import axios from 'axios'
import baseUrl from '../../Fetch/baseUrl'
import apiClient from '../../Fetch/apiClient'

import {useReducer, useEffect, useLayoutEffect, useContext} from 'react'
import { useParams, useLocation } from "react-router-dom";

const initialState = {
  allProducts: {},
  productOrder: {},

}
const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(productReducer, initialState)

  useLayoutEffect(() => {
    (async() => {
      let response = await apiClient.get('api/products')
      let data = await response.data
      dispatch({type:actions.CREATE_PRODUCT_LIST, payload:data})
    })()
  }, [])



  return(
    <ProductContext.Provider value = {{state, dispatch, actions}}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider
