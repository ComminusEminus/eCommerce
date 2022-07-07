
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import useShoppingCartItemHandler from '../Hooks/ShoppingCartItemHandler'

import shoppingCartItemAtters from '../Atters/shoppingCartItemAtters'

import ProductOrder from '../../ProductOrder/Components/ProductOrder'

const ShoppingCartItemActions = ({cartData}) => {
  const {open, handleOpen, handleClose, deleteHandler} = useShoppingCartItemHandler(cartData)

  return(
    <>
      {
        cartData && <Box {...shoppingCartItemAtters.actionItemsBox}>
          <Button value = {cartData.productOrderId} onClick = {deleteHandler} {...shoppingCartItemAtters.deleteButtonProps}>
            Delete
          </Button>
          <Button onClick = {handleOpen} {...shoppingCartItemAtters.editButtonProps}>
            Edit
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            key = {`edit-model-${cartData.formId}`}
          >
            <Box sx = {{...shoppingCartItemAtters.modelBoxAtters}}>
              <Typography {...shoppingCartItemAtters.modelTitleText} v>
                {cartData.productTitle}
              </Typography>
              <ProductOrder product = {cartData} />
              <Button onClick = {handleClose} {...shoppingCartItemAtters.cancelEditButton}>
                Cancel
              </Button>
            </Box>
          </Modal>
        </Box>
      }
      {
        !cartData && <h1>...Loading</h1>
      }
    </>
  )
}

export default ShoppingCartItemActions
