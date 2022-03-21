import ProductListing from '../product-listing/ProductListing'
import ProductContext from '../../contexts/ProductContext'

import {useContext} from 'react'


const Home = () => {
  const {state : {allProducts}} = useContext(ProductContext)
  return (
    <ProductListing products = {allProducts} />
  )
}

export default Home;
