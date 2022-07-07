import { useNavigate } from 'react-router-dom';

const useShoppingCartOptionsHook = () => {
  const navigate = useNavigate();

  const checkOutHandler = () => {
    navigate('/checkout')
  }
  const continueShoppingHandler = () => {
    navigate(-1)
  }

  return {continueShoppingHandler, checkOutHandler}
}

export default useShoppingCartOptionsHook
