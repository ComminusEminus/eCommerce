import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import ProductType from './components/product-type/ProductType'
import CssBaseline from '@mui/material/CssBaseline';
import ProductProvider from './providers/ProductProvider'

ReactDOM.render(
  <CssBaseline>
    <ProductProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductProvider>
  </CssBaseline>,
  document.getElementById('root')
);
