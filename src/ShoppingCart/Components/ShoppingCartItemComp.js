import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartItemActions from './ShoppingCartItemActions'

const ShoppingCartItemComp = ({cartData}) => {

  if(cartData){
    return(
      <>
        <ShoppingCartItem cartData = {cartData} />
        <ShoppingCartItemActions cartData = {cartData} />
      </>
    )
  }else{
    return(
      <h1>...Loading</h1>
    )
  }

}

export default ShoppingCartItemComp
