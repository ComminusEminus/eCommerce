import { Routes,Route, Outlet, Link, useSearchParams, useParams } from "react-router-dom";
import { Suspense, lazy } from 'react';

import {NavContainer} from '../../Nav/index'
import {MainPageLayout} from '../../common/index'
const ShoppingCartContainer = lazy(() => import('../../ShoppingCart/container/ShoppingCartContainer'))
const ProductContainer = lazy(() => import('../../ProductCatalog/container/ProductContainer'))
const CheckoutContainer = lazy(() => import('../../Checkout/container/CheckoutContainer'))
const VerifyContainer = lazy(() => import('../../Checkout/container/VerifyContainer'))

/*
  React router route paths. I used lazy load for shoppingcart product checkout and verify containers
  because those were the only components here that will sometimes not be used. Nav container and main layout
  will always be displayed on each page regardless.
*/

const RoutePaths = () => {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<MainPageLayout children = {<NavContainer/>} />} >
          <Route index element = {
            <Suspense fallback = {<h1>...Loading</h1>}>
              <ProductContainer />
            </Suspense>
            }
          />
            <Route path = '/:shirtCatagory' element = {
                <Suspense fallback = {<h1>...Loading</h1>}>
                  <ProductContainer />
                </Suspense>
              }
            />
            <Route path = '/details/:shirtTitle' element = {
                <Suspense fallback = {<h1>...Loading</h1>}>
                  <ProductContainer />
                </Suspense>
              }
            />
            <Route path = '/cart' element = {
                <Suspense fallback = {<h1>...Loading</h1>}>
                  <ShoppingCartContainer/>
                </Suspense>
              }
            />
          <Route path = '/checkout' element = {
              <Suspense fallback = {<h1>...Loading</h1>}>
                <CheckoutContainer/>
              </Suspense>
            }
          />
          <Route path = '/verifyOrder' element = {
              <Suspense fallback = {<h1>...Loading</h1>}>
                <VerifyContainer/>
              </Suspense>
            }
          />
          <Route path = '*' element = {<h1>That Page Does Not Exist</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default RoutePaths;
