import {useContext, useState, useMemo} from 'react'

import ShoppingCartContext from '../Provider/ShoppingCartContext'


const useShoppingCartItemHandler = () => {
  const {dispatch, actions} = useContext(ShoppingCartContext);

  const [open, setOpen] = useState(false);


  const deleteHandler = (event) => {

    dispatch({type: actions.DELETE_ITEM, payload: event.target.value})
  }
  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return {open, handleOpen, handleClose, deleteHandler}
}

export default useShoppingCartItemHandler
