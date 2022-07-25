import ProductOrder from '../../ProductOrder/Components/ProductOrder'

import Modal from '@mui/material/Modal';


const ShoppingCartModel = ({modelProps}) => {
  const {handleClose, open, cartData} = modelProps

  return (
    <>
      {
        cartData && <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          key = {`edit-model-${cartData.formId}`}
        >
          <ProductOrder product = {cartData} />
        </Modal>
      }
      {
        !cartData && <h1>...Loading</h1>
      }
    </>
  )
}

export default ShoppingCartModel
