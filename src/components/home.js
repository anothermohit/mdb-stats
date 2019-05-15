import React, {Suspense} from 'react';
import {Container, Row, Col, Card} from 'reactstrap';
import Features from './features';
import Listings from './listings';
import {AppHeader, AppSidebar, AppSidebarNav} from '@coreui/react';
import { BrowserRouter as Router} from "react-router-dom";

import navigation from '../nav.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: []
    }
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  updateFilter(element, operation) {
    let filters = this.state.filters;
    if (operation == 'add')
      filters.push(element);
    else if (operation == 'remove')
      filters.pull(element);
    this.setState({filters});
  }

  render() {
    return (
      <div className="full-width full-height">
        <div className="white-background">
          <Listings />
        </div>
      </div>
    )
  }
}

/*
<div style={{paddingTop: 55}}>
  <Router>
    <AppSidebar className="home-sidebar" fixed display="lg">
      <Suspense>
        <AppSidebarNav navConfig={navigation} {...this.props} />
      </Suspense>
    </AppSidebar>
  </Router>
</div>
*/
