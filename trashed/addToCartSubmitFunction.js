import addItemToLocalStorage from '../../../helpers/addItemToLocalStorage';
import { useNavigate } from 'react-router-dom';


const addToCartSubmitFunction = (id, title, qty, price, option, callback) => {
  addItemToLocalStorage(id, title, qty, price, option)
  callback()
}
//pass values and useNavigate to this function

export default addToCartSubmitFunction;
