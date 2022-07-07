import {useNavigate} from 'react-router-dom'


const useEditOrderHook = () => {
  const navigate = useNavigate()

  const editShoppingCartHandler = () => {
    navigate('/cart')
  }

  const editInfoHandler = () => {
    navigate('/checkout')
  }

  return {editInfoHandler, editShoppingCartHandler}
}


export default useEditOrderHook
