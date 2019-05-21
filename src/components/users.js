import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Container } from 'reactstrap';

import usersData from '../utilities/usersData'

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
    </tr>
  )
}

class Users extends Component {

  render() {

    const userList = usersData.filter((user) => user.id < 10)

    return (
      <div className="app align-items-center white-background">
        <Container style={{paddingTop: 120, paddingBottom: 80}}>
          <h5 className="blue-color center-align">Users</h5>

          <div className="animated fadeIn center-align">
            <Row>
              <Col xl={12}>
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
                  </CardHeader>
                  <CardBody>
                    <Table responsive hover>
                      <thead>
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">name</th>
                          <th scope="col">registered</th>
                          <th scope="col">role</th>
                          <th scope="col">status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userList.map((user, index) =>
                          <UserRow key={index} user={user}/>
                        )}
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

export default Users;