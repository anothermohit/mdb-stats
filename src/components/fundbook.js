import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Dropdown, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown, Table, Forms, FormGroup, Input, InputGroup, Label, Button } from 'reactstrap';
import { AppSwitch } from '@coreui/react';

class Fundbook extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(6).fill(false),
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  render() {
    return (
      <div className="app align-items-center light-blue-background">
        <Container style={{paddingTop: 120, paddingBottom: 80}}>
          <h5 className="blue-color center-align">Your FundBook</h5>
          <br />
          <Card style={{width: 400, margin: 'auto'}}>
            <CardHeader>
              <strong>Date</strong>
            </CardHeader>
            <CardBody>
              <h6>O.Range</h6>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="ccnumber">Start Date</Label>
                    <Input type="date" id="exampleDate" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="ccnumber">END Date</Label>
                    <Input type="date" id="exampleDate" required />
                  </FormGroup>
                </Col>
              </Row>
              <h6>LifeTime</h6>
              <Col xs="15">
                <FormGroup>
                  <Label htmlFor="strategy">Category</Label>
                  <Input type="select" name="strategy" id="strategy">
                    <option value="text">Strategy Purchase</option>
                    <option value="text">Quarterly Maintenance</option>
                    <option value="text">Txn. Balance Recharged</option>
                    <option value="text">Tx. Brokerage</option>
                  </Input>
                </FormGroup>
              </Col>
              <Button className="vmargin-5 blue-background no-border" block>Get Details</Button>
            </CardBody>
          </Card>
        <br />
        <br />
        <Table bordered>
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
         </Container>
      </div>
    );
  }
}

export default Fundbook;
