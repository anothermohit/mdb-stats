import React from 'react';
import {Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div className="fixed-position white-background full-width z-index-100">
        <Container>
          <a style={{marginTop: 16}} href="/" className="black-color font-20 font-weight-600 float-left no-decoration">Sitemap</a>
        </Container>
      </div>
    )
  }
}
