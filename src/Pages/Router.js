import { Routes,Route, Outlet, Link } from "react-router-dom";

import HomePage from './HomePage'
import ProductFilterPage from './ProductFilterPage'
import ProductOrderPage from './ProductOrderPage'
import ShoppingCartPage from './ShoppingCartPage'
import CustomerInfoPage from './CustomerInfoPage'
import ValidateOrderPage from './ValidateOrderPage'
import Layout from './Layout'
import NavContainer from '../Nav/NavContainer'


const Router = () => {
  return(
    <Routes>
      <Route path = '/' element = {<Layout children = {<NavContainer/>} />} >
        <Route
          index
          element = {<HomePage />}
        />
        <Route
          path = '/:filter'
          element = {<ProductFilterPage />}
        />
        <Route
          path = '/order/:title'
          element = {<ProductOrderPage />}
        />
        <Route
          path = '/cart'
          element = {<ShoppingCartPage />}
        />
        <Route
          path = '/checkout'
          element = {<CustomerInfoPage />}
        />
        <Route
          path = '/validate'
          element = {<ValidateOrderPage />}
        />
        <Route
          path = '*'
          element = {<h1>That Page Does Not Exist</h1>}
        />
      </Route>
    </Routes>
  )
}

export default Router
