import React, { Component } from 'react';
import Header from './components/header';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import Content from './components/content';
import Features from './components/features';
import Product from './components/product';
import Tradebook from './components/tradebook';
import FundBook from './components/fundbook';
import Portfolio from './components/portfolio';
import KYC from './components/KYC';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

function App() {
  return (
    <Router>
      <div className="full-width full-height">
        <Header />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/tradebook" component={Tradebook} />
        <Route exact path="/fundbook" component={FundBook} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/kyc" component={KYC} />
        <Route exact path="/" component={Content} />
      </div>
    </Router>
  );
}

export default App;

/*
<div className="full-width full-height">
  <Header />
  <Content />
</div>
*/
