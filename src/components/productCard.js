import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Badge, Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Tooltip } from 'reactstrap';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      tooltipOpen: false,
      tooltip2Open: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  toggle2() {
    this.setState({
      tooltip2Open: !this.state.tooltip2Open
    });
  }

  goToLogin() {
    window.location.href = "/#/login"
  }

  render() {
    return (
      <Card style={{width: 350, minHeight: 213, marginBottom: 20}}>
        <h5 className="margin-0 margin-20">ICICI Bank April FUT</h5>
        <p className="margin-0 hmargin-20">Technical: MACD (9,26,35)</p>
        <p className="hmargin-20">Risk 15% on Capital for 6m</p>
        <Row>
          <Col xs="6">
            <p className="margin-0 hmargin-20">NSE</p>
            <p className="margin-0" style={{marginLeft: 20}}>+0.51% Profit</p>
            <p className="margin-0 font-weight-600" style={{marginLeft: 20}}>Buy</p>
            <p className="margin-0" style={{marginLeft: 20}}>01-05-19 | 12:00:00</p>
            <p className="margin-0" style={{marginLeft: 20}}>126.65</p>
          </Col>
          <Col xs="6" className="text-right">
            <p className="margin-0" style={{marginRight: 20}}>STAB001</p>
            <p className="margin-0" style={{marginRight: 20}}>+3.2% p/m</p>
            <p className="margin-0 font-weight-600" style={{marginRight: 20}}>Sell</p>
            <p className="margin-0" style={{marginRight: 20}}>31-12-19 | 11:59:59</p>
            <p className="margin-0" style={{marginRight: 20}}>726.45</p>
            <Button style={{marginLeft: -20}} onClick={this.goToLogin.bind(this)} className="vmargin-20 white-color blue-background no-border" block>Execute</Button>
          </Col>
        </Row>
      </Card>
    )
  }
}

export default ProductCard;
