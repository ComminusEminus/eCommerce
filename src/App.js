import NavBar from './components/nav/NavBar'
import ProductListing from './components/product-listing/ProductListing'
import Home from './components/home/Home'
import ProductType from './components/product-type/ProductType'
import ProductDetail from './components/product-detail/ProductDetail'
import ShoppingCart from './components/cart/ShoppingCart'

import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";

import tempData from './tempData.json'

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Routes>
        <Route path ="/" element = {<Home />} />
          <Route path = "/:product" element = {<ProductType />} />
          <Route path = "/refine/:product/:sub" element = {<ProductType />} />
          <Route path = "/detail/:detail" element = {<ProductDetail />} />
          <Route path = "/cart" element = {<ShoppingCart />} />
      </Routes>
    </>
  );
}

export default App;
