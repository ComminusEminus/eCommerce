import actions from '../actions/ProductActions';
import createFilters from '../helpers/createFilters';
import recursiveFilter from '../helpers/recursiveFilter';

const productReducer = (state, action) => {
  switch(action.type){
    case actions.PRODUCT_FILTER:
      const filteredProducts = recursiveFilter((!action.allProducts)? state.allProducts : action.allProducts, action.payload)
      return {...state, filteredProducts: filteredProducts}
    case actions.CREATE_REFINE_FILTER:
      const filterList = createFilters(action.payload, (!action.allProducts)? state.allProducts : action.allProducts, state.productPageFilters)
      return {...state, refineFilter: filterList}
    case actions.GET_PRODUCTS:
      return {...state, allProducts: action.payload}
    case actions.PRODUCT_DETAIL:
      console.log(state.allProducts)
      const getAllProd = (!action.allProducts)? state.allProducts : action.allProducts
      const product = getAllProd.find((product) => product.id == action.payload)
      return {...state, productDetails: product}
    default: return state
  }
}



export default productReducer;
