import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
  Container
} from 'reactstrap';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div style={{paddingTop: 120, paddingBottom: 80}} className="animated fadeIn light-blue-background">
        <Container className="justify-center-align">
          <div style={{maxWidth: 600}} className="margin-auto">
            <Card>
              <CardHeader>
                <strong>Your Profile</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="city">Fullname</Label>
                  <Input type="text" id="name" placeholder="Enter your name" />
                </FormGroup>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="number">Phone Number</Label>
                      <Input type="number" id="number" placeholder="Enter your Phone Number" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                     <Label for="exampleDate">Date Of Birth</Label>
                     <Input
                       type="date"
                       name="date"
                       id="exampleDate"
                       placeholder="date placeholder"
                     />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup row>
                 <Label for="exampleFile" sm={5}>Select Image</Label>
                 <br />
                 <Col sm={11}>
                   <Input type="file" name="file" id="exampleFile" />
                 </Col>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="company">Company</Label>
                  <Input type="text" id="company" placeholder="Enter your company name" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="company">Channel Partner</Label>
                  <Input type="text" id="company" placeholder="Enter your Partner name" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="vat">Aadhar Number</Label>
                  <Input type="text" id="aadhar" placeholder="1111 2222 3333" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="vat">PAN</Label>
                  <Input type="text" id="pan" placeholder="BNZPM2501F" />
                </FormGroup>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input type="email" name="email" id="exampleEmail" placeholder="abc@xyz" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input type="password" name="password" id="examplePassword" placeholder="******" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label htmlFor="street">Street</Label>
                  <Input type="text" id="street" placeholder="Enter street name" />
                </FormGroup>
                <FormGroup row className="my-0">
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="city">City</Label>
                      <Input type="text" id="city" placeholder="Enter your city" />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input type="text" id="postal-code" placeholder="Postal Code" />
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="country">Country</Label>
                  <Input type="text" id="country" placeholder="Country name" />
                </FormGroup>
                <Button className="vmargin-5 blue-background no-border margin-auto" style={{width: 100}} block>Submit</Button>
              </CardBody>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

export default Profile;
