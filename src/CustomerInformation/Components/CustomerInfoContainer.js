import useCustomerInfoHook from '../Hooks/CustomerInfoHook'
import CustomerInfo from './CustomerInfo'

const CustomerInfoContainer = () => {
  const customerFormInstance = useCustomerInfoHook()

  return(
    <>
       {
         customerFormInstance && <CustomerInfo customerFormInstance = {customerFormInstance} />
       }
       {
         !customerFormInstance && <h1>...Loading</h1>
       }
    </>
  )
}

export default CustomerInfoContainer
