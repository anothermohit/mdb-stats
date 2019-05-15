import React from 'react';
import {Container, Row, Col, Card} from 'reactstrap';
import Features from './features';
import Listings from './listings';

export default class Content extends React.Component {
  render() {
    return (
      <div className="full-width full-height">
        <div style={{backgroundImage: 'url("/home-center.jpg")', paddingTop: 60}}>
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

        <div className="light-blue-background">
          <Listings />
        </div>
      </div>
    )
  }
}

/*
<img className="full-width full-height" src="/home-center.jpg" />
*/
