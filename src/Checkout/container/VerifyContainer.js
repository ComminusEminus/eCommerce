import {VerifyOrder, useVerifyOrderUI} from '../index'

const VerifyContainer = () => {
  const {orderDetails, orderComplete, editHandler, submitOrderHandler, total} = useVerifyOrderUI()
  if(orderComplete){
    return(
      <>
        <VerifyOrder details = {orderDetails} editHandler = {editHandler} submitOrderHandler = {submitOrderHandler} orderTotal = {total} />
      </>
    )
  }else{
    <h1>Please Complete Checkout Forms Before Verifying Order</h1>
  }
}

export default VerifyContainer;
