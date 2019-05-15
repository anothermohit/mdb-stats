import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import ProductCard from './productCard';

export default class Listings extends React.Component {
  render() {
    return (
        <Container>
          <h3 style={{paddingTop: 40}} className="center-align">Strategies</h3>
          <Row>
            <Col md="4">
              <ProductCard />
            </Col>
            <Col md="4">
              <ProductCard />
            </Col>
            <Col md="4">
              <ProductCard />
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <ProductCard />
            </Col>
            <Col md="4">
              <ProductCard />
            </Col>
            <Col md="4">
              <ProductCard />
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <ProductCard />
            </Col>
            <Col md="4">
              <ProductCard />
            </Col>
            <Col md="4">
              <ProductCard />
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <ProductCard />
            </Col>
            <Col md="4">
              <ProductCard />
            </Col>
            <Col md="4">
              <ProductCard />
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <ProductCard />
            </Col>
            <Col md="4">
              <ProductCard />
            </Col>
            <Col md="4">
              <ProductCard />
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <ProductCard />
            </Col>
            <Col md="4">
              <ProductCard />
            </Col>
            <Col md="4">
              <ProductCard />
            </Col>
          </Row>
        </Container>
    )
  }
}
