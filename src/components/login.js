import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends Component {
  render() {

    console.log('login')
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
                          <Input type="text" placeholder="Username" autoComplete="username" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="password" placeholder="Password" autoComplete="current-password" />
                        </InputGroup>
                        <Row>
                          <Col xs="6">
                            <Link to="/">
                              <Button className="blue-background white-color no-border">Login</Button>
                            </Link>
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
                  <Card className="text-white bg-primary py-5 d-md-down-none">
                    <CardBody className="text-center" style={{height: 240}}>
                      <div>
                        <h2>Sign up</h2>
                        <p>If you do not have an account, please sign up!</p>
                        <Link to="/register">
                          <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
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
