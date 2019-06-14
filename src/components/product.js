import React, { Component } from 'react';
import { Button, Card, Col, Container, Input, Row } from 'reactstrap';
import ProductCard from './productCard.js';
import Tables from './tables.js';
import DashboardCurve from './dashboard-curve.js';
import $ from 'jquery';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailedStrategy: null,
      newReview: '',
      reviews: [
        {title: 'Title 1', text:'This is the first review'},
        {title: 'Title 2', text: 'This is second and the biggest review. There is some extra text here which lets us see a big review. You do not need to read all this text as it is absolutely non-sense but since I have spent time writing it, it is only fair that you are reading it still. Thanks for the attention!'},
        {title: 'Title 3', text: 'And this is last'}
      ]
    }
  }

  componentDidMount() {
    this.getDetailedStrategy();
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  loadMore() {
      let reviews = this.state.reviews;
      let newReviews = [
        {title: 'Title ' + (reviews.length + 1), text: 'Adding review number ' + (reviews.length + 1)},
        {title: 'Title ' + (reviews.length + 2), text: 'And this is of course, number ' + (reviews.length + 2)},
        {title: 'Title X', text: 'Who am I?'}
      ]
      reviews = reviews.concat(newReviews);
      this.setState({reviews})
  }

  getDetailedStrategy() {
    let id = parseInt(this.props.match.params.id.replace('STAB', ''));

    var self = this;
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://test.algobulls.com/v1/strategydetailed/" + id,
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "X-CSRFToken": "nzNxMdJWQmQFaPdixjIfnG3FPj8FRUVwVo5TdhMAUi3PgCccqwek2qlNOmFsmOZL",
        "cache-control": "no-cache",
        "Postman-Token": "becc9911-3435-4332-bcf8-e25ed1c5f15c",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": 'HEAD, GET, POST, PUT, PATCH, DELETE',
        "Access-Control-Allow-Headers": 'Origin, Content-Type, X-Auth-Token'
      }
    }

    $.ajax(settings).done(function (response) {
      console.log(response)
      self.setState({detailedStrategy : response})
    });
  }

  addReview() {
    let title = document.getElementById('title').value;
    let text = document.getElementById('text').value;
    let reviews = this.state.reviews;
    reviews.unshift({title, text});
    this.setState({reviews});

    document.getElementById('title').value = '';
    document.getElementById('text').value = '';
  }

  render() {
    let strategy = this.state.detailedStrategy || {};
    return (
      <div>
        <div className="app align-items-center">
          <Container style={{paddingTop: 80}}>
            <Row className="justify-content-center">
              <Col md="4">
                <ProductCard strategy={strategy} />
              </Col>
              <Col md="4">
                <Tables />
              </Col>
            </Row>
            <Row>
              <Col md="2">
              </Col>
              <Col md="8">
                <DashboardCurve />
              </Col>
            </Row>

            <Row>
              <Col md="2">
              </Col>

              <Col md="8">
                <h5 style={{margin: 'auto', margin: 20, textAlign: 'center'}}>Description</h5>
                <p>{strategy.description}</p>
              </Col>

              <Col md="2">
              </Col>
            </Row>

            <Row>
              <Col md="2">
              </Col>
              <Col md="8">
                <fieldset style={{marginBottom: 24}} className="rating">
                  <input type="radio" id="star5" name="rating" value="5" /><label className="full cursor-pointer" htmlFor="star5" title="Awesome - 5 stars"></label>
                  <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half cursor-pointer" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
                  <input type="radio" id="star4" name="rating" value="4" /><label className="full cursor-pointer" htmlFor="star4" title="Pretty good - 4 stars"></label>
                  <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half cursor-pointer" htmlFor="star3half" title="Meh - 3.5 stars"></label>
                  <input type="radio" id="star3" name="rating" value="3" /><label className="full cursor-pointer" htmlFor="star3" title="Meh - 3 stars"></label>
                  <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half cursor-pointer" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
                  <input type="radio" id="star2" name="rating" value="2" /><label className="full cursor-pointer" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                  <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half cursor-pointer" htmlFor="star1half" title="Meh - 1.5 stars"></label>
                  <input type="radio" id="star1" name="rating" value="1" /><label className="full cursor-pointer" htmlFor="star1" title="Sucks big time - 1 star"></label>
                  <input type="radio" id="starhalf" name="rating" value="half" /><label className="half cursor-pointer" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
                </fieldset>
              </Col>
            </Row>

            <Row className='bmargin-24'>
              <Col md="2">
              </Col>
              <Col md="8">
                <div className="textarea-container">
                  <div style={{height: 80}}>
                    <Card className="shadow-sm bg-white rounded">
                      <Row>
                      <Col xs="1">
                        <img src={'/sample/avatar.png'} className="avatar" width={40} style={{margin: 10}} alt="admin@bootstrapmaster.com" />
                      </Col>
                      <Col xs="3">
                        <p style={{marginTop: 16, marginLeft: 0,fontWeight: 'bold'}}>Sample User</p>
                      </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <Input style={{height: 40}} type="textarea" name="title" className="textarea font-16 font-weight-600" id="title" placeholder="Title..."/>
                          <Input style={{height: 80}} type="textarea" name="text" className="textarea" id="text" placeholder="Write a review ..."/>
                        </Col>
                      </Row>
                    </Card>
                  </div>
                    <Button onClick={this.addReview.bind(this)} className="float-right no-border" style={{width: 100, backgroundColor:'#4F6DF5', color: 'white', marginTop: 100}} block>Submit</Button>
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
                {this.state.reviews.map((review, i) => (
                  <div key={i}>
                    <Card className="shadow-sm bg-white rounded" style={{marginTop: 20}}>
                      <Row>
                        <Col xs="1">
                          <img src={'/sample/avatar.png'} className="avatar" width={40} style={{margin: 10}} alt="admin@bootstrapmaster.com" />
                        </Col>
                        <Col xs="3">
                          <p style={{marginTop: 16, marginLeft: 0, fontWeight: 'bold'}}>Sample User</p>
                        </Col>
                      </Row>
                      <div className="divider"></div>
                      <h5 className="margin-10">{review.title}</h5>
                      <p className="margin-10">{review.text}</p>
                    </Card>
                    <Button className="submit float-right" style={{marginTop: 10, fontSize: 12}}>Helpful</Button>
                    <br />
                    <br />
                  </div>
                ))}
              </Col>
            </Row>
            <Button onClick={this.loadMore.bind(this)} className="center-align margin-auto no-border grey-background" style={{width: 150, color: 'white', marginTop: 60, marginBottom: 100}} block>Load More</Button>
          </Container>
        </div>
      </div>
    );
  }
}

export default Product;
