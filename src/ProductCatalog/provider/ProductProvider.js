
import {productReducer, ProductContext} from '../index';

import {useReducer} from 'react';

const initialState = {
  products: undefined,
  filterProducts: undefined
};

const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(productReducer, initialState)


  return(
    <ProductContext.Provider value = {{state, dispatch}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;
