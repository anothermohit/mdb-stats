import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardHeader, CardSubtitle, Container, Button, Table, ButtonToolbar, ButtonGroup } from 'reactstrap'
import ProductCard from './productCard';

class ThemeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: 'rgb(255, 255, 255)'
    }
  }

  componentDidMount () {
    const elem = ReactDOM.findDOMNode(this).parentNode.firstChild
    const color = window.getComputedStyle(elem).getPropertyValue('background-color')
    this.setState({
      bgColor: color || this.state.bgColor
    })
  }

  render() {

    return (
      <table className="w-100">
        <tbody>
        <tr>
          <td className="text-muted">HEX:</td>
          <td className="font-weight-bold">{ 'white' }</td>
        </tr>
        <tr>
          <td className="text-muted">RGB:</td>
          <td className="font-weight-bold">{ this.state.bgColor }</td>
        </tr>
        </tbody>
      </table>
    )
  }
}

class ThemeColor extends Component {
   constructor(props) {
     super(props);
   }

  render() {

    // const { className, children, ...attributes } = this.props
    const { className, children } = this.props

    const classes = classNames(className, 'theme-color w-75 rounded mb-3')

    return (
      <Col xl="2" md="4" sm="6" xs="12" className="mb-4">
        <div className={classes} style={{paddingTop: '75%'}}></div>
        {children}
        <ThemeView/>
      </Col>
    )
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
  this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

  this.state = {
    radioSelected: 2,
  };
}

onRadioBtnClick(radioSelected) {
  this.setState({
    radioSelected: radioSelected,
  });
}

  render() {
    return (
      <div className="white-background">
        <Container className="animated fadeIn">
          <h2>Your Dashboard</h2>
          <br />
          <h5 className="no-decoration blue-color" style={{marginTop: 40}}>Your Portfolio At A Glance</h5>
          <br />
          <h6>Algo Trading Status :</h6>

        <Row>
          <Col xs="12" sm="6" md="4">
          <ProductCard />
          </Col>
          <Col xs="12" sm="6" md="4">
          <ProductCard />
          </Col>
          <Col xs="12" sm="6" md="4">
          <ProductCard />
          </Col>
        </Row>
          <h6>
          Go to your <a className="no-decoration blue-color" href="/#/broking-account/portfolio">Portfolio</a>
          </h6>
          <br />
          <br />
          <h5 className="no-decoration blue-color">Your Recent Trades:</h5>
          <Col sm="12" className="d-none d-sm-inline-block">
            <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
              <ButtonGroup className="mr-3" aria-label="First group">
              <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
              <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Week</Button>
              <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Month</Button>
              <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(4)} active={this.state.radioSelected === 4}>Year</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>

          <Table>
         <thead>
           <tr>
             <th>#</th>
             <th>First Name</th>
             <th>Last Name</th>
             <th>Username</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <th scope="row">1</th>
             <td>Mark</td>
             <td>Otto</td>
             <td>@mdo</td>
           </tr>
           <tr>
             <th scope="row">2</th>
             <td>Jacob</td>
             <td>Thornton</td>
             <td>@fat</td>
           </tr>
           <tr>
             <th scope="row">3</th>
             <td>Larry</td>
             <td>the Bird</td>
             <td>@twitter</td>
           </tr>
         </tbody>
       </Table>
       <h6>Go To Your <a className="no-decoration blue-color" href="/#/transactions/trading-orders">TradeBook</a></h6>
       <br />
       <br />
       <h5 className="no-decoration blue-color">Your Recent Transactions:</h5>
       <br />
       <Table bordered>
        <thead>
          <tr>
            <th colspan="3">
            <Col sm="12" className="d-none d-sm-inline-block">
              <ButtonToolbar className="float-left" aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-3" aria-label="First group">
                <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>All</Button>
                <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Cat.1</Button>
                <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Cat.2</Button>
                <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(4)} active={this.state.radioSelected === 4}>Cat.3</Button>
                <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(5)} active={this.state.radioSelected === 5}>Cat.4</Button>

                </ButtonGroup>
              </ButtonToolbar>
            </Col>
            </th>
            <th colspan="2">
            <Col sm="12" className="d-none d-sm-inline-block">
              <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-3" aria-label="First group">
                <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Week</Button>
                <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Month</Button>
                <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(4)} active={this.state.radioSelected === 4}>Year</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
            </th>
          </tr>
        </thead>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Particulars</th>
              <th>Credit</th>
              <th>Debit</th>
              <th>Net</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>Detail</td>
              <td>Amount</td>
              <td>Amount</td>
              <td>Amount</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Detail</td>
              <td>Amount</td>
              <td>Amount</td>
              <td>Amount</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Detail</td>
              <td>Amount</td>
              <td>Amount</td>
              <td>Amount</td>
            </tr>
          </tbody>
        </Table>
        <h6>Go To Your <a className="no-decoration blue-color" href="/#/transactions/algobulls-transactions">Fundbook</a></h6>
      </Container>
    </div>
    );
  }
}

export default Dashboard;
