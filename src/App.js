import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Landing from './components/landing';
import Features from './components/features';
import Product from './components/product';
import Tradebook from './components/tradebook';
import FundBook from './components/fundbook';
import Portfolio from './components/portfolio';
import BrokingAccount from './components/brokingAccount';
import Profile from './components/profile';
import Dashboard from './components/dashboard';
import Users from './components/users';
import User from './components/user';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

ScrollToTop = withRouter(ScrollToTop);

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="full-width full-height">
          <Header />
          <div>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/strategies" component={Home} />
            <Route exact path="/tradebook" component={Tradebook} />
            <Route exact path="/fundbook" component={FundBook} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/broking-account" component={BrokingAccount} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:id" component={User} />
            <Route exact path="/" component={Landing} />
          </div>
          <div style={{minHeight: 200}} className="light-blue-background">
            <Footer />
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
