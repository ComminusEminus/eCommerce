import CustomerInformationDisplay from './CustomerInformationDisplay'



const CustomerInformationDisplayContainer = ({customerFormValues}) => {
  return(
    <>
      {
        customerFormValues && <CustomerInformationDisplay customerFormValues = {customerFormValues} />
      }
      {
        !customerFormValues && <h1>...Loading</h1>
      }
    </>
  )
}
export default CustomerInformationDisplayContainer
