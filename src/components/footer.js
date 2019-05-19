import React from 'react';
import {Row, Col, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div className="full-width padding-10 grey-border z-index-100">
        <Container>
          <Row>
            <Col md="3" xs="6">
              <Link to="/">
                <p style={{marginTop: 16}} href="/" className="black-color font-16 font-weight-600 no-decoration">Sitemap</p>
              </Link>
              <Link to="/">
                <p href="/" className="margin-0 grey-color font-weight-100 no-decoration">Home</p>
              </Link>
              <Link to="/">
                <p href="/" className="margin-0 grey-color font-weight-100 no-decoration">Product</p>
              </Link>
              <Link to="/">
                <p href="/" className="margin-0 grey-color font-weight-100 no-decoration">About us</p>
              </Link>
              <Link to="/">
                <p href="/" className="margin-0 grey-color font-weight-100 no-decoration">Blog</p>
              </Link>
            </Col>
            <Col md="3" xs="6">
              <Link to="/">
                <p style={{marginTop: 16}} href="/" className="black-color font-16 font-weight-600 no-decoration">Legal</p>
              </Link>
              <Link to="/">
                <p href="/" className="margin-0 grey-color font-weight-100 no-decoration">Terms & Conditions</p>
              </Link>
              <Link to="/">
                <p href="/" className="margin-0 grey-color font-weight-100 no-decoration">Privacy Policy</p>
              </Link>
              <Link to="/">
                <p href="/" className="margin-0 grey-color font-weight-100 no-decoration">FAQs</p>
              </Link>
              <Link to="/">
                <p href="/" className="margin-0 grey-color font-weight-100 no-decoration">Risk Disclosure</p>
              </Link>
            </Col>
            <Col md="3" xs="6">
              <Link to="/">
                <p style={{marginTop: 16}} href="/" className="black-color font-16 font-weight-600 no-decoration">Algobulls</p>
              </Link>
              <p href="/" className="margin-0 grey-color font-weight-100 no-decoration">Algobulls is registered under SEBI [Registration Number:201800060974] as required under the SEBI Regulation in the Securities Markets; Regulations, 2007.</p>
            </Col>
            <Col md="3" xs="6">
              <p style={{marginTop: 16}} href="/" className="black-color font-16 font-weight-600 no-decoration">Tweets</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
