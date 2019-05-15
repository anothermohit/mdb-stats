import React from 'react';
import {Container} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div style={{height: 60}} className="fixed-position white-background full-width z-index-100">
        <Container>
          <a style={{marginTop: 16}} href="/" className="black-color font-20 font-weight-600 float-left no-decoration">AlgoBulls</a>
          <Link to="/login">
            <img src="/avatar.png" style={{marginTop: 14}} className="avatar float-right" alt="User" />
          </Link>
        </Container>
      </div>
    )
  }
}
