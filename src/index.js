import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import ProductType from './components/product-type/ProductType'
import CssBaseline from '@mui/material/CssBaseline';
import ProductProvider from './providers/ProductProvider'

ReactDOM.render(
  <CssBaseline>
    <BrowserRouter>
      <ProductProvider>
        <App />
      </ProductProvider>
    </BrowserRouter>
  </CssBaseline>,
  document.getElementById('root')
);
