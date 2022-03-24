import addItemToLocalStorage from '../../../helpers/addItemToLocalStorage';
import { useNavigate } from 'react-router-dom';


const addToCartSubmitFunction = (productName, qty, productPrice, option, callback) => {
  addItemToLocalStorage(productName, qty, productPrice, option)
  callback()
}
//pass values and useNavigate to this function

export default addToCartSubmitFunction;
