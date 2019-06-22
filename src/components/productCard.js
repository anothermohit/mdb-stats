import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Card, Col, Row, Tooltip } from 'reactstrap';
import $ from 'jquery';
import button from './button.css'

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      strategy: this.props.strategy || {},
      tooltipOpen: false,
      tooltip2Open: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.strategy != this.props.strategy) {
      this.setState({strategy: nextProps.strategy});
    }
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

  render() {
    let strategy = this.state.strategy;
    return (
      <Card className="margin-auto shadow-sm bg-white rounded" style={{minHeight: 213, marginBottom: 20, width: 300}}>
        <Link to={"/strategy/" + this.state.strategy.code} >
          <Row>
            <Col xs="6">
              {strategy.is_live ?
                <div>
                  <Badge id="status" className="mr-1" style={{backgroundColor:'#4F6DF5', color: 'white', marginTop: 20, marginRight: 0, marginBottom: 0, marginLeft: 20}}>Live</Badge>
                  <Tooltip style={{backgroundColor: '#4F6DF5', color: 'white', border: '1px solid'}} placement="right" isOpen={this.state.tooltipOpen} target="status" toggle={this.toggle}>
                    This strategy is live!
                  </Tooltip>
                </div>
              : null}
            </Col>
            <Col xs="6">
              <Tooltip style={{backgroundColor: '#4F6DF5', color: 'white', border: '1px solid'}} placement="right" isOpen={this.state.tooltip2Open} target="info" toggle={this.toggle2}>
                This is some extra text,
                that is available on hover!
              </Tooltip>
              <p className="grey-color float-right margin-0 margin-20 font-weight-700" style={{marginTop: 20, marginRight: 20, marginBottom: 0, marginLeft: 0}}>
                N. S. Fidya
                <i id="info" className="fa fa-info-circle font-14 blue-color float-right" style={{marginLeft: 5}}></i>
              </p>
            </Col>
          </Row>
          <h5 className="no-decoration black-color font-16 margin-0 margin-10 hmargin-20">{strategy.name}</h5>
          <p className="no-decoration grey-color margin-0 font-12 hmargin-20">Technical: MACD (9,26,35)</p>
          <p className="no-decoration grey-color font-12 hmargin-20">Risk 15% on Capital for 6m</p>
          <Row>
            <Col xs="6">
              <p className="no-decoration black-color margin-0 hmargin-20">NSE</p>
              <p className="no-decoration grey-color margin-0" style={{marginLeft: 20}}>+0.51% Profit</p>
              <p className="no-decoration black-color margin-0 font-weight-600" style={{marginLeft: 20}}>Buy</p>
              <p className="no-decoration grey-color font-12 margin-0" style={{marginLeft: 20}}>01-05-19 | 12:00:00</p>
              <p className="no-decoration grey-color margin-0" style={{marginLeft: 20}}>126.65</p>
            </Col>
            <Col xs="6" className="no-decoration grey-color text-right">
              <p className="no-decoration black-color margin-0" style={{marginRight: 20}}>{strategy.code}</p>
              <p className="no-decoration grey-color margin-0" style={{marginRight: 20}}>+3.2% p/m</p>
              <p className="no-decoration black-color margin-0 font-weight-600" style={{marginRight: 20}}>Sell</p>
              <p className="no-decoration grey-color font-12 margin-0" style={{marginRight: 20}}>31-12-19 | 11:59:59</p>
              <p className="no-decoration grey-color margin-0" style={{marginRight: 20}}>726.45</p>
            </Col>
          </Row>
        </Link>
        <Row>
          <Col xs="6">
            <label className="switch margin-20">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </Col>
          <Col xs="6" className="no-decoration grey-color text-right">
            <Link to="/login">
              <Button style={{marginLeft: -20}} className="no-decoration grey-color font-16 vmargin-20 white-color blue-background no-border" block>Execute</Button>
            </Link>
          </Col>
        </Row>
      </Card>
    )
  }
}

export default ProductCard;
