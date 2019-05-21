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
import { Typeahead } from 'reactstrap-typeahead';

function range(start, end) {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}

class BrokingAccount extends Component {
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
      <div style={{paddingTop: 120, paddingBottom: 80}} className="animated fadeIn white-background">
        <Container className="justify-center-align">
          <div style={{maxWidth: 600}} className="margin-auto">
            <Card>
              <CardHeader>
                <strong>Broking Account</strong>
              </CardHeader>
              <CardBody>
                <Row form>
                  <Col md={6}>
                    <Label htmlFor="city">Select Broker</Label>
                    <Typeahead
                      labelKey="name"
                      options={range(0, 1000).map((o) => o.toString())}
                      placeholder={'Search ...'}
                    />
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="city">MPIN</Label>
                      <Input type="text" id="mpin" placeholder="MPIN" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="city">API Key</Label>
                      <Input type="text" id="api-key" placeholder="Enter your API Key" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">API Secret</Label>
                      <Input type="password" name="api-secret" id="examplePassword" placeholder="******" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Client ID</Label>
                      <Input type="email" name="client-id" id="exampleEmail" placeholder="Client ID" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input type="password" name="password" id="password" placeholder="******" />
                    </FormGroup>
                  </Col>
                </Row>
                <Button className="vmargin-5 blue-background no-border margin-auto" style={{width: 100}} block>Save</Button>
              </CardBody>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

export default BrokingAccount;
