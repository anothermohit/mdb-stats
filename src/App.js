import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import Home from './home';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

function App() {
  console.warn = () => {};
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
