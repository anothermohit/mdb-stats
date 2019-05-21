import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Container } from 'reactstrap';

import usersData from '../utilities/usersData'

class User extends Component {

  render() {

    const user = usersData.find( user => user.id.toString() === this.props.match.params.id)

    const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="app align-items-center white-background">
        <Container style={{paddingTop: 120, paddingBottom: 80}}>
          <h5 className="blue-color center-align">User Page</h5>
          <div className="animated fadeIn center-align">
            <Row>
              <Col lg={12}>
                <Card>
                  <CardHeader>
                    <strong><i className="icon-info pr-1"></i>User id: {this.props.match.params.id}</strong>
                  </CardHeader>
                  <CardBody>
                      <Table responsive striped hover>
                        <tbody>
                          {
                            userDetails.map(([key, value]) => {
                              return (
                                <tr key={key}>
                                  <td>{`${key}:`}</td>
                                  <td><strong>{value}</strong></td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}

export default User;
