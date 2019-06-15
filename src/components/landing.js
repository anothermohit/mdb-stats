import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Card, Button} from 'reactstrap';
import Features from './features';
import ProductCard from './productCard';

export default class Landing extends React.Component {
  render() {
    return (
        <div className="full-width">
          <div className="banner-background" style={{paddingTop: 60}}>
            <Container className="white-color">
              <div className="padding-80">
                <div className="center-align">
                  <h2>Become an expert Algo Trader</h2>
                  <p className="hmargin-20">AlgoBulls provides a platform which connects TRADERS and STRATEGISTS</p>
                  <p className="hmargin-20">Traders can use licensed strategies to do systematic and emotionless fully automated trading</p>
                </div>

                <Row>
                  <Col lg="4">
                    <Card style={{minHeight: 250}} className="center-align transparent-background margin-20 white-border">
                      <i className="fa fa-file-code-o font-44 margin-20"></i>
                      <h5>Fully Automated</h5>
                      <p className="hmargin-20">Low latency fully automated order routing system with plug-in expert strategy, with no manual intervention</p>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card style={{minHeight: 250}} className="center-align transparent-background margin-20 white-border">
                      <i className="fa fa-fighter-jet font-44 margin-20"></i>
                      <h5>Fast & Accurate</h5>
                      <p className="hmargin-20">Algorithms that compare price and metrics of millions of financial instruments, much faster than humans</p>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card style={{minHeight: 250}} className="center-align transparent-background margin-20 white-border">
                      <i className="fa fa-cogs font-44 margin-20"></i>
                      <h5>Systematic & Emotionless</h5>
                      <p className="hmargin-20">Enforcing systematic and disciplined approach in investment strategy through automated execution</p>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>

          <div className="white-background">
            <Features />
          </div>

          <div className="divider">
          </div>

          <Container className="white-background">
            <h3 style={{paddingTop: 40}} className="center-align font-20">Top Strategies</h3>
            <Row>
              <Col sm="12" md="4">
                <ProductCard />
              </Col>
              <Col sm="12" md="4">
                <ProductCard />
              </Col>
              <Col sm="12" md="4">
                <ProductCard />
              </Col>
            </Row>
          </Container>

          <Link to="/strategies">
            <Button className="no-border margin-auto" style={{width: 200, backgroundColor:'#4F6DF5', color: 'white', marginBottom: 20}} block>Explore More</Button>
          </Link>
        </div>
    )
  }
}
