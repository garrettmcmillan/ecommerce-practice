import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Details from './components/Details'
import Cart from './components/cart/Cart'
import Default from './components/Default'
import ProductList from './components/ProductList';
import Home from './components/Home';
import Modal from './components/Modal';

import './App.css';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aesthetic" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/truckload" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
