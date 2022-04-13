import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
//providers
import {ProductProvider} from './ProductCatalog/index'
import {OrderProvider} from './SelectOrder/index'
import {ShoppingCartProvider} from './ShoppingCart/index'
import {CheckoutProvider} from './Checkout/index'

ReactDOM.render(
  <CssBaseline>
    <BrowserRouter>
      <ShoppingCartProvider >
        <ProductProvider>
          <OrderProvider>
            <CheckoutProvider>
              <App />
            </CheckoutProvider>
          </OrderProvider>
        </ProductProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  </CssBaseline>,
  document.getElementById('root')
);
