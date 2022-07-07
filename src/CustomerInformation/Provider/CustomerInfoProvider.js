import CustomerInfoContext from './CustomerInfoContext'
import actions from '../Reducer/actions'
import customerInfoReducer from '../Reducer/CustomerInfoReducer'
import {useReducer} from 'react'


const initialState = {
  customerFormInstance: undefined
}

const CustomerInfoProvider = ({children}) => {
  const [state, dispatch] = useReducer(customerInfoReducer, initialState)

  return(
    <CustomerInfoContext.Provider value = {{state, dispatch, actions}}>
      {children}
    </CustomerInfoContext.Provider>
  )
}

export default CustomerInfoProvider
