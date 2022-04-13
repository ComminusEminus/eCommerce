import {actions, productToOrderForm} from '../index';
import {selectOrderSchema} from '../../common/index'

const orderReducer = (state, action) => {
  switch(action.type){
    case actions.GET_FORM_MATERIALS:
      const formMaterials = new productToOrderForm(action.payload, 'Add to Cart', selectOrderSchema)
      return {...state, formMaterials: formMaterials}
    case actions.SUBMIT_FORM:
      return {...state, order: action.payload};
    default:
      return state
  }
}



export default orderReducer;
