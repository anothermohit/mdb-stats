import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Badge, Button, CardFooter, Container, Col, Fade, Form, FormGroup, Input, InputGroup, Table, InputGroupText, Label, Row } from 'reactstrap';

class TradeBook extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app align-items-center white-background">
        <Container style={{paddingTop: 120, paddingBottom: 80}}>
        <h5 className="blue-color center-align">Your TradeBook</h5>
        <Col xs="3" className="margin-auto">
          <FormGroup>
            <Label className="center-align" htmlFor="strategy">Strategy</Label>
            <Input type="select" name="strategy" id="strategy">
              <option value="text">Text 1</option>
              <option value="text">Text 1</option>
              <option value="text">Text 2</option>
              <option value="text">Text 1</option>
            </Input>
          </FormGroup>
        </Col>
        <Col xs="3" className="margin-auto">
          <FormGroup>
            <Label className="center-align" htmlFor="strategy">Investment</Label>
            <Input type="select" name="strategy" id="strategy">
              <option value="text">Text 1</option>
              <option value="text">Text 1</option>
              <option value="text">Text 2</option>
              <option value="text">Text 1</option>
            </Input>
          </FormGroup>
        </Col>
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
          </CardBody>
        </Card>
        <Button className="vmargin-20 blue-background no-border margin-auto" style={{width: 200}} block>Get Details</Button>
        <br />
        <br />

        <Table bordered>
           <thead>
             <tr>
              <th>Strategy</th>
               <th>Timestamp</th>
               <th>Instrument</th>
               <th>Transaction Type</th>
               <th>Quantity</th>
               <th>Type</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <th scope="row"></th>
               <td>Detail</td>
               <td>Amount</td>
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
               <td>Amount</td>
             </tr>
             <tr>
               <th scope="row"></th>
               <td>Detail</td>
               <td>Amount</td>
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
               <td>Amount</td>
             </tr>
             <tr>
               <th scope="row"></th>
               <td>Detail</td>
               <td>Amount</td>
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
               <td>Amount</td>
             </tr>
           </tbody>
         </Table>
         </Container>
      </div>
    );
  }
}

export default TradeBook;
