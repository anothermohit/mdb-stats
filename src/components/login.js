import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import * as ls from "local-storage";
import swal from 'sweetalert';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  login() {
    if (this.state.username == 'customer' && this.state.password == 'password1') {
      ls.set('user', 'customer');
      window.location.href = '/';
    } else if (this.state.username == 'partner' && this.state.password == 'password2') {
      ls.set('user', 'partner');
      window.location.href = '/';
    } else
      swal('Unauthorized', 'Invalid Username or password', 'error')
  }

  onChange(value, field) {
    if (field == 'username')
      this.setState({username: value})
    else if (field == 'password')
      this.setState({password: value})
    else return;
  }

  render() {
    return (
      <div className="full-width full-height white-background">
        <div className="app flex-row align-items-center" style={{paddingTop: 200, paddingBottom: 200}}>
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                  <Card className="p-4">
                    <CardBody>
                      <Form>
                        <h1>Login</h1>
                        <p className="text-muted">Sign In to your account</p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input onChange={(e) => this.onChange(`${e.target.value}`, 'username')} id="username" type="text" placeholder="Username" autoComplete="username" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input onChange={(e) => this.onChange(`${e.target.value}`, 'password')} id="password" type="password" placeholder="Password" autoComplete="current-password" />
                        </InputGroup>
                        <Row>
                          <Col xs="6">
                            <Button onClick={this.login.bind(this)} className="blue-background white-color no-border">Login</Button>
                          </Col>
                          <Col xs="6" className="text-right">
                            <Button color="link" className="px-0">Forgot password?</Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
              </Col>
              <Col md="6">
                  <Card className="text-white blue-background py-5 d-md-down-none">
                    <CardBody className="text-center" style={{height: 240}}>
                      <div>
                        <h2>Sign up</h2>
                        <p>If you do not have an account, please sign up!</p>
                        <Link to="/register">
                          <Button className="mt-3 white-background" active tabIndex={-1}>Register Now!</Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Login;
