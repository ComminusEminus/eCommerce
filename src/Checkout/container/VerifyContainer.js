import {VerifyOrder, useVerifyOrderUI} from '../index'

/*
  After completing the form for billing and shipping the user is then directed
  to a read only page of billing shipping and order to verify all the information is
  correct 
*/


const VerifyContainer = () => {
  const {orderDetails, orderComplete, editHandler, submitOrderHandler, total, closeOrderCompleteDialogHandler ,orderSubmissionMessage, openDialog } = useVerifyOrderUI()
  if(orderComplete){
    return(
      <>
        <VerifyOrder
          details = {orderDetails}
          editHandler = {editHandler}
          submitOrderHandler = {submitOrderHandler}
          orderTotal = {total}
          closeOrderCompleteDialogHandler = {closeOrderCompleteDialogHandler}
          orderSubmissionMessage = {orderSubmissionMessage}
          openDialog = {openDialog}
        />
      </>
    )
  }else{
    <h1>Please Complete Checkout Forms Before Verifying Order</h1>
  }
}

export default VerifyContainer;
