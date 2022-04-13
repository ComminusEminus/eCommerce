import apiClient from './apiClient';
import actions from '../index';

const fetchProducts = async (dispatch, action, filter) => {
  const getProducts = await apiClient.get('/products')
  dispatch({type: action, payload: getProducts.data, filterData: filter});


}


export default fetchProducts;
