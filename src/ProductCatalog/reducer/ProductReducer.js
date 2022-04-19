import {actions, productList} from '../index';

const productReducer = (state, action) => {
  switch(action.type){
    case actions.SET_PRODUCTS:
      const setProducts = new productList()
      const formattedProducts = setProducts.addProducts(action.payload);
      return {products: formattedProducts}
    case actions.PRODUCT_FILTER:
      console.log(action.filter)
      const filterProducts = new productList()
      const filteredProducts = filterProducts.filterList(action.payload, [action.filter.shirtCatagory])
      console.log(filteredProducts)
      return {products:filteredProducts}
    case actions.FIND_PRODUCT:
      const findProducts = new productList()
      const foundProduct = findProducts.findProduct( action.payload, action.filter.shirtTitle)
      console.log(foundProduct)
      return {products: foundProduct}
    default:
      return state
  }
}

export default productReducer;
