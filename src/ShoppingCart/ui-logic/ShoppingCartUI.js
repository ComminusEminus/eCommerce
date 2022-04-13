import actions from '../actions/actions'
import {useCallback, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const useShoppingCartUI = ({dispatch, ...props}) => {
  const navigate = useNavigate();
  const [total, setTotal] = useState('')
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = (event) => {
    setOpen(true)
    dispatch({type: actions.EDIT_PRODUCT, payload: event.target.value})
  }
  const checkOutHandler = () => {
    navigate('/checkout')
  }
  const continueShoppingHandler = () => {
    navigate(-1)
  }
  useEffect(() => {
    const grandTotal = props.currentCart.reduce((grandTotal, subTotal) => subTotal.lineTotal + grandTotal, 0)
    setTotal(grandTotal)
  }, [props])

  return {total, open, handleOpen, handleClose, checkOutHandler, continueShoppingHandler}
}

export default useShoppingCartUI;
