import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    }
  }

  render() {
    return (
      <div className="full-width full-height white-background">
        <div className="app flex-row align-items-center" style={{paddingTop: 200, paddingBottom: 200}}>
          <Container>
            <Row className="justify-content-center">
              <Col md="9" lg="7" xl="6">
                <Card className="mx-4">
                  <CardBody className="p-4">
                    <Form>
                      {this.state.page == 1 ?
                        <div>
                          <h4>Mobile Number</h4>
                          <p className="text-muted">Please enter your mobile number to continue</p>
                          <InputGroup className="mb-3">
                            <Input id="number" type="number" placeholder="Mobile Number" autoComplete="mobile-number" />
                          </InputGroup>
                          <Button onClick={() => this.setState({page: 2})} className="blue-background white-color no-border" block>Get OTP</Button>
                        </div>
                      : this.state.page == 2 ?
                        <div>
                          <h4>OTP</h4>
                          <p className="text-muted">Please enter the OTP received on your mobile number</p>
                          <InputGroup className="mb-3">
                            <Input id="otp" type="password" placeholder="OTP" autoComplete="otp" />
                          </InputGroup>
                          <Button onClick={() => this.setState({page: 3})} className="blue-background white-color no-border" block>Verify</Button>
                        </div>
                      : this.state.page == 3 ?
                        <div>
                          <h4>Password Updated!</h4>
                          <p className="text-muted">Your password has been updated successfully. Please login to continue - </p>
                          <Link to="/login">
                            <Button className="blue-background white-color no-border" block>Login</Button>
                          </Link>
                        </div>
                      : null}
                    </Form>
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

export default ResetPassword;
