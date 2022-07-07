import ProductList from '../DataObjects/ProductList'
import actions from './actions'

function productReducer (state, action){
  switch(action.type){
    case actions.CREATE_PRODUCT_LIST:
      if(ProductList.list.length == 0){
        ProductList.addProducts(action.payload)
      }
      return {...state, allProducts: ProductList}
    case actions.FIND_PRODUCT:
      let productOrder = ProductList.getItem('title', action.payload)
      console.log(productOrder)
      return {...state, productOrder: productOrder}
    default:
      return state
  }
}
export default productReducer
