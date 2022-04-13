import actions from '../actions/actions';
import formMaterials from '../interactions/formMaterials'
import completeOrder from '../interactions/completeOrder'

const checkoutReducer = (state, action) => {
  switch(action.type){
    case actions.CREATE_FORM_MATERIALS:
      const checkoutFormMaterials = new formMaterials();
      const blankForm = checkoutFormMaterials.returnBlankMaterials();
      return {formMaterials: blankForm}
    case actions.SUBMIT_ORDER:
      const newOrder = new completeOrder();
      const hydrateForm = new formMaterials();
      const orderDetails =  newOrder.buildOrder(action.payload)
      console.log(orderDetails)
      return {orderComplete: true, orderDetails: orderDetails, formMaterials: hydrateForm}
    case actions.EDIT_ORDER_INFORMATION:
      const editFormMaterials = new formMaterials();
      const editForm = editFormMaterials.returnEditMaterials(action.payload)
      console.log(editForm)
      return {formMaterials: editForm, orderComplete: false}
    case actions.FINALIZE_ORDER:
      console.log(action.payload)
      return{formMaterials: undefined, orderComplete: false, orderDetails: undefined}
    default:
      return state
  }
}

export default checkoutReducer;
