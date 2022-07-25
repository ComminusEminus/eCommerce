import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const OrderCompleteDialog = ({closeOrderCompleteDialogHandler, orderSubmissionMessage, openDialog}) => {
  return(
    <>
      <Dialog
        open={openDialog}
        onClose={closeOrderCompleteDialogHandler}
        aria-labelledby="order-complete-dialog"
        aria-describedby="order-complete-description"
      >
        <DialogTitle id="order-complete-title">
          Order Submission Status
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="order-complete-description">
            {orderSubmissionMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant = "contained" onClick={closeOrderCompleteDialogHandler}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default OrderCompleteDialog;
