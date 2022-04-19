import actions from '../actions/actions'
import {useCallback, useState, useEffect, useMemo} from 'react'
import { useNavigate } from 'react-router-dom';

const useShoppingCartUI = ({dispatch, ...props}) => {
  const navigate = useNavigate();
  const [total, setTotal] = useState('')
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const removeItemHandler = (event) => {
    dispatch({type: actions.DELETE_ITEM, payload: event.target.value})
  }
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
  const grandTotal = useMemo(() => {
     return props.currentCart.reduce((grandTotal, subTotal) => subTotal.lineTotal + grandTotal, 0)
  }, [props.currentCart])
  
  useEffect(() => {
    setTotal(grandTotal)
  })
  return {total, open, handleOpen, handleClose, checkOutHandler, continueShoppingHandler, removeItemHandler}
}

export default useShoppingCartUI;
