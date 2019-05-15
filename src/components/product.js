import React, { Component, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import ProductCard from './productCard.js';
import Tables from './tables.js';
import Dashboard from './dashboard.js';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newReview: '',
      writing: false,
      reviews: [
        'This is the first review',
        'This is second and the biggest review. There is some extra text here which lets us see a big review. You do not need to read all this text as it is absolutely non-sense but since I have spent time writing it, it is only fair that you are reading it still. Thanks for the attention!',
        'And this is last'
      ]
    }
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  writing() {
    this.setState({writing: true})
  }

  addReview() {
    let element = document.getElementById('submit-review');
    let reviews = this.state.reviews;
    reviews.unshift(element.value);
    this.setState({reviews});
    element.value = ''
  }

  render() {
    return (
      <div>
        <div className="app align-items-center">
          <Container style={{paddingTop: 80}}>
            <Row className="justify-content-center cursor-pointer">
              <Col md="4">
                <ProductCard />
              </Col>
              <Col md="4">
                <Tables />
              </Col>
            </Row>
            <Row>
              <Col md="2">
              </Col>
              <Col md="8">
                <Dashboard />
              </Col>
            </Row>

            <Row>
              <Col md="2">
              </Col>
              <Col md="8">
                <fieldset style={{marginTop: -24, marginBottom: 24}} class="rating">
                  <input type="radio" id="star5" name="rating" value="5" /><label className="full cursor-pointer" for="star5" title="Awesome - 5 stars"></label>
                  <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half cursor-pointer" for="star4half" title="Pretty good - 4.5 stars"></label>
                  <input type="radio" id="star4" name="rating" value="4" /><label className="full cursor-pointer" for="star4" title="Pretty good - 4 stars"></label>
                  <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half cursor-pointer" for="star3half" title="Meh - 3.5 stars"></label>
                  <input type="radio" id="star3" name="rating" value="3" /><label className="full cursor-pointer" for="star3" title="Meh - 3 stars"></label>
                  <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half cursor-pointer" for="star2half" title="Kinda bad - 2.5 stars"></label>
                  <input type="radio" id="star2" name="rating" value="2" /><label className="full cursor-pointer" for="star2" title="Kinda bad - 2 stars"></label>
                  <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half cursor-pointer" for="star1half" title="Meh - 1.5 stars"></label>
                  <input type="radio" id="star1" name="rating" value="1" /><label className="full cursor-pointer" for="star1" title="Sucks big time - 1 star"></label>
                  <input type="radio" id="starhalf" name="rating" value="half" /><label class="half cursor-pointer" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                </fieldset>
              </Col>
            </Row>
            <Row className='bmargin-24'>
              <Col md="2">
              </Col>
              <Col md="8">
                <div className="textarea-container">
                  <div style={{height: 80}}>
                    <Card>
                      <Row>
                      <Col md="1">
                        <img src={'/avatar.png'} className="avatar" width={40} style={{margin: 10}} alt="admin@bootstrapmaster.com" />
                      </Col>
                      <Col md="2">
                        <p style={{marginTop: 16, marginLeft: -5, fontWeight: 'bold'}}>Sample User</p>
                      </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <Input style={{height: 70}} type="textarea" name="text" className="textarea" id="submit-review" onClick={this.writing.bind(this)} placeholder="Write a review ..."/>
                        </Col>
                      </Row>
                    </Card>
                  </div>
                    <Button onClick={this.addReview.bind(this)} className="float-right" style={{width: 100, backgroundColor:'#4F6DF5', color: 'white', marginTop: 60}} block>Submit</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <h5 style={{margin: 'auto', marginBottom: 10}}>Reviews</h5>
            </Row>
            <Row>
              <Col md="2">
              </Col>
              <Col md="8">
                {this.state.reviews.map((review) => (
                  <div>
                    <Card style={{marginTop: 20}}>
                      <Row>
                      <Col md="1">
                        <img src={'/avatar.png'} className="avatar" width={40} style={{margin: 10}} alt="admin@bootstrapmaster.com" />
                      </Col>
                      <Col md="2">
                        <p style={{marginTop: 16, marginLeft: -5, fontWeight: 'bold'}}>Sample User</p>
                      </Col>
                      </Row>
                      <p className="margin-10">{review}</p>
                    </Card>
                    <Button className="submit float-right" style={{marginTop: 10, fontSize: 12}}>Helpful</Button>
                    <br />
                    <br />
                  </div>
                ))}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Product;
