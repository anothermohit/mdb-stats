import React from 'react';
import {Container, Row, Col, Card} from 'reactstrap';

export default function Features() {
  return (
    <Container>
      <h3 style={{paddingTop: 40}} className="center-align">Features</h3>
      <Row>
        <Col sm="12" lg="4">
          <Card className="margin-auto" style={{width: 360, minHeight: 213, marginBottom: 20}}>
            <i className="fa fa-users font-44 blue-color margin-20"></i>
            <h5 className="margin-0 hmargin-20">Expert Strategists</h5>
            <p className="margin-20">Startegist include Technical Analyst, Fundamental Analyst, Developers & finance super brains</p>
          </Card>
        </Col>
        <Col sm="12" lg="4">
          <Card className="margin-auto" style={{width: 360, minHeight: 213, marginBottom: 20}}>
            <i className="fa fa-inr font-44 blue-color margin-20"></i>
            <h5 className="margin-0 hmargin-20">Money Protection</h5>
            <p className="margin-20">Funds are kept in traders secured broking accounts, accessible only to the trader</p>
          </Card>
        </Col>
        <Col sm="12" lg="4">
          <Card className="margin-auto" style={{width: 360, minHeight: 213, marginBottom: 20}}>
            <i className="fa fa-id-card font-44 blue-color margin-20"></i>
            <h5 className="margin-0 hmargin-20">Registered Brokers</h5>
            <p className="margin-20">Trader can select a broker from our preferred broking service provider</p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="4">
          <Card className="margin-auto" style={{width: 360, minHeight: 213, marginBottom: 20}}>
            <i className="fa fa-plug font-44 blue-color margin-20"></i>
            <h5 className="margin-0 hmargin-20">Plug & Play Strategies</h5>
            <p className="margin-20">Traders can choose from wide variety of strategies based on their previous performance</p>
          </Card>
        </Col>
        <Col sm="12" lg="4">
          <Card className="margin-auto" style={{width: 360, minHeight: 213, marginBottom: 20}}>
            <i className="fa fa-laptop font-44 blue-color margin-20"></i>
            <h5 className="margin-0 hmargin-20">Robust Platform</h5>
            <p className="margin-20">Controllable yet fully automated, easy to use, emotionless and systematic platform</p>
          </Card>
        </Col>
        <Col sm="12" lg="4">
          <Card className="margin-auto" style={{width: 360, minHeight: 213, marginBottom: 20}}>
            <i className="fa fa-certificate font-44 blue-color margin-20"></i>
            <h5 className="margin-0 hmargin-20">SEBI Certified</h5>
            <p className="margin-20">ALGOBULLS is a SEBI registered company listed as investment advisers</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
