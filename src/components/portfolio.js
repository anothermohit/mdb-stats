import React from 'react';
import { Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, Container, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown, Table, Forms, FormGroup, Input, InputGroup, Label, Button } from 'reactstrap';
import ProductCard from './productCard';

class Portfolio extends React.Component {
  render() {
    return(
      <div className="app align-items-center white-background">
        <Container style={{paddingTop: 120, paddingBottom: 80}}>
        <h5 className="blue-color">Customer Portfolio</h5>
        <br />
        <h6>Fund in your broker account <strong>Rs: 100</strong></h6>
        <br />
        <Table bordered>
           <thead>
             <tr>
               <th>Strategy</th>
               <th>Funds</th>
               <th>Target</th>
               <th>StopLoss</th>
               <th>Trading</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <th scope="row"><Col md="12">
               <ProductCard />
               </Col></th>
               <td>Detail</td>
               <td>Amount</td>
               <td>Amount</td>
               <td>Amount</td>
             </tr>
             <tr>
               <th scope="row"><Col md="12">
               <ProductCard />
               </Col></th>
               <td>Detail</td>
               <td>Amount</td>
               <td>Amount</td>
               <td>Amount</td>
             </tr>
             <tr>
               <th scope="row"><Col md="12">
               <ProductCard />
               </Col></th>
               <td>Detail</td>
               <td>Amount</td>
               <td>Amount</td>
               <td>Amount</td>
             </tr>
           </tbody>
         </Table>
         <br />
         <Button className="vmargin-5 blue-background no-border" block style={{width: 190, float: 'right'}}>Add More Strategies</Button>
         <br />
         <h6>Credit Exposure: <input type="number" name="number" id="number"></input></h6>
         <br />
         <h6>Pnl desired: <input type="number" name="number" id="number"></input></h6>
         <br />
         <h6>Risk Appetite: <input type="number" name="number" id="number"></input></h6>
         </Container>
      </div>
    )
  }
}

export default Portfolio;
