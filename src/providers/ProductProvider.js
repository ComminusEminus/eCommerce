import ProductContext from '../contexts/ProductContext';
import productReducer from '../reducers/ProductReducer';
import actions from '../actions/ProductActions'
import apiClient from '../api/http-common'

import {useReducer, useEffect} from 'react';


const initialState = {
  allProducts: undefined,
  filteredProducts: undefined,
  productPageFilters: ["Mens", "Womens", "Sale", "Cart"],
  refineFilter: undefined,
  productDetails: undefined
};


const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(productReducer, initialState)

  useEffect(() => {
    apiClient.get('/products').then((res) => {
      dispatch({type: actions.GET_PRODUCTS, payload: res.data})
    }).catch(() => {
      dispatch({type: actions.ERROR})
    })
  }, [])

  const productDispatch = {
    productFilter: (filter) => {
      dispatch({type: actions.PRODUCT_FILTER, payload: filter})
    },
    createRefinedFilters: (pageFilter) => {
      dispatch({type: actions.CREATE_REFINE_FILTER, payload: pageFilter})
    },
    getProductDetails: (productId) => {
      dispatch({type: actions.PRODUCT_DETAIL, payload: productId})
    }
  }


  return(
    <ProductContext.Provider value = {{productDispatch, state}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;
