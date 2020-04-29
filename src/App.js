import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Product from './components/Product';

import './App.css';



function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Product />
      <Details />
      <Cart />
      <Default /> 
    </React.Fragment>
  );
}

export default App;
