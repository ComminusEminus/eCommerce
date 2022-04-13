import { Routes,Route, Outlet, Link, useSearchParams, useParams } from "react-router-dom";
import { Suspense, lazy } from 'react';

import {NavContainer} from '../../Nav/index'
import {MainPageLayout} from '../../common/index'
import {ProductContainer} from '../../ProductCatalog/index'
import {ShoppingCartContainer} from '../../ShoppingCart/index'
import {ProductLayout} from '../../ProductCatalog/index'
import {CheckoutContainer} from '../../Checkout/index'
import {VerifyContainer} from '../../Checkout/index'


const RoutePaths = () => {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<MainPageLayout children = {<NavContainer/>} />} >
          <Route index element = {<ProductContainer />} />
            <Route path = '/:shirtCatagory' element = {<ProductContainer />} />
            <Route path = '/details/:shirtTitle' element = {<ProductContainer />} />
          <Route path = '/cart' element = {<ShoppingCartContainer/>} />
          <Route path = '/checkout' element = {<CheckoutContainer/>} />
          <Route path = '/verifyOrder' element = {<VerifyContainer/>} />
          <Route path = '*' element = {<h1>That Page Does Not Exist</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default RoutePaths;
