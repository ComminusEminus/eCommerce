import actions from './actions'
import CustomerInformationInstance from '../DataObjects/CustomerInformationInstance'

const customerInfoReducer = (state, action) => {
  switch(action.type){
    case actions.CREATE_FORM_INSTANCE:
      return {customerFormInstance: CustomerInformationInstance}
    case actions.UPDATE_FORM_INSTANCE:
      CustomerInformationInstance.updateFormInstance(action.payload)
      return {customerFormInstance: CustomerInformationInstance}
    default:
      return state
  }
}

export default customerInfoReducer;
