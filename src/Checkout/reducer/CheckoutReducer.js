import { actions, formMaterials, completeOrder} from '../index'

const newFormMaterials = new formMaterials();
const newCompletedOrder = new completeOrder();

const checkoutReducer = (state, action) => {
  switch(action.type){
    case actions.CREATE_FORM_MATERIALS:
      //const checkoutFormMaterials = new formMaterials();
      const blankForm = newFormMaterials.returnBlankMaterials();
      return {formMaterials: blankForm}
    case actions.SUBMIT_ORDER:
      //const newOrder = new completeOrder();
      //const hydrateForm = new formMaterials();
      const orderDetails =  newCompletedOrder.buildOrder(action.payload)
      //console.log(orderDetails)
      return {orderComplete: true, orderDetails: orderDetails, formMaterials: newFormMaterials}
    case actions.EDIT_ORDER_INFORMATION:
      //const editFormMaterials = new formMaterials();
      const editForm = newFormMaterials.returnEditMaterials(action.payload)
      //console.log(editForm)
      return {formMaterials: editForm, orderComplete: false}
    case actions.FINALIZE_ORDER:
      newCompletedOrder.clearCart()
      return{formMaterials: newFormMaterials, orderComplete: false, orderDetails: undefined}
    default:
      return state
  }
}

export default checkoutReducer;
