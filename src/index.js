import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import ShoppingCartProvider from './ShoppingCart/Provider/ShoppingCartProvider'
import ProductProvider from './Products/Provider/ProductProvider'
import CustomerInfoProvider from './CustomerInformation/Provider/CustomerInfoProvider'


ReactDOM.render(
  <CssBaseline>
    <BrowserRouter>
      <ProductProvider>
        <ShoppingCartProvider>
          <CustomerInfoProvider>
            <App />
          </CustomerInfoProvider>
        </ShoppingCartProvider>
      </ProductProvider>
    </BrowserRouter>
  </CssBaseline>,

  document.getElementById('root')
);
