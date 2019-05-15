import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import ProductCard from './productCard';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class Listings extends React.Component {
  render() {
    return (
        <Container style={{paddingTop: 80}}>
          <Row>
            <Col sm="12" lg="4">
              <ProductCard />
            </Col>
            <Col sm="12" lg="4">
              <ProductCard />
            </Col>
            <Col sm="12" lg="4">
              <ProductCard />
            </Col>
          </Row>

          <Row>
            <Col sm="12" lg="4">
              <ProductCard />
            </Col>
            <Col sm="12" lg="4">
              <ProductCard />
            </Col>
            <Col sm="12" lg="4">
              <ProductCard />
            </Col>
          </Row>

          <Row>
            <Col sm="12" lg="4">
              <ProductCard />
            </Col>
            <Col sm="12" lg="4">
              <ProductCard />
            </Col>
            <Col sm="12" lg="4">
              <ProductCard />
            </Col>
          </Row>

          <Row>
            <Col sm="12" lg="4">
              <ProductCard />
            </Col>
            <Col sm="12" lg="4">
              <ProductCard />
            </Col>
            <Col sm="12" lg="4">
              <ProductCard />
            </Col>
          </Row>

          <div className="pagination">
            <Pagination size="md" aria-label="Page navigation example">
                <PaginationItem>
                  <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">
                    5
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">
                    6
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">
                    7
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink next href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink last href="#" />
                </PaginationItem>
              </Pagination>
            </div>
        </Container>
    )
  }
}
