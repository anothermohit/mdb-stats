import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card className="height-300">
              <CardHeader>
                <i className="fa fa-align-justify"></i> Stats
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Last</th>
                    <th>Day</th>
                    <th>Week</th>
                    <th>Month</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>+2.3%</td>
                    <td>+2.5%</td>
                    <td>+2.8%</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>+2.3%</td>
                    <td>+2.5%</td>
                    <td>+2.8%</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>+2.3%</td>
                    <td>+2.5%</td>
                    <td>+2.8%</td>
                  </tr>
                  <tr>
                    <td>Average</td>
                    <td>+2.3%</td>
                    <td>+2.5%</td>
                    <td>+2.8%</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Tables;
