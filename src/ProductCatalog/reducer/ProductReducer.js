import {actions, productList} from '../index';

const productReducer = (state, action) => {
  const products = new productList()
  switch(action.type){
    case actions.SET_PRODUCTS:
      const formattedProductList = products.addProducts(action.payload);
      return {products: formattedProductList}
    case actions.PRODUCT_FILTER:
      console.log(action.filter)
      const filterTest = products.filterList(action.payload, [action.filter.shirtCatagory])
      console.log(filterTest)
      return {products:filterTest}
    case actions.FIND_PRODUCT:

      const findProduct = products.findProduct( action.payload, action.filter.shirtTitle)
      console.log(findProduct)
      return {products: findProduct}
    default:
      return state
  }
}

export default productReducer;
