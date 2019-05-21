import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import ProductCard from './productCard';
import { Pagination, PaginationItem, PaginationLink, Button, ButtonGroup, Progress } from 'reactstrap';
import { Typeahead } from 'reactstrap-typeahead';

function resize() {
  console.log(window.innerWidth);
}

export default class Listings extends React.Component {
    constructor (props) {
    super(props);

    let showFilters;
    let screenWidth = window.innerWidth;
    if (screenWidth > 768)
      showFilters = true;
    else
      showFilters = false;
    this.state = { cSelected: [], showFilters, loading: false };

    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  componentWillMount() {
    setTimeout(function() {
      console.log('waiting')
    }, 1000)
  }

  componentDidMount() {
    window.onresize = this.setShowFilters.bind(this);
  }

  setShowFilters() {
    let showFilters;
    let screenWidth = window.innerWidth;

    if (screenWidth > 768)
      showFilters = true;
    else
      showFilters = false;
    this.setState({showFilters})
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected], loading: true });
    this.forceUpdate()
  }

  toggleFilters() {
    this.setState({showFilters: !this.state.showFilters})
  }

  clearAll() {
    this.setState({cSelected: []})
  }

  render() {
    console.log('render')
    return (
      <div className="full-width">
        <div className="white-background">
            <Container style={{paddingTop: 80}}>
              <div className="d-sm-block d-md-none bottom-margin-20">
                <div onClick={this.toggleFilters.bind(this)} className="cursor-pointer no-decoration font-16 blue-color white-background no-border" block>
                  Filters
                  {this.state.showFilters ? <i className="cursor-pointer fa fa-chevron-down font-16 blue-color show-on-mobile" style={{marginLeft: 10}}></i>
                  : <i className="cursor-pointer fa fa-chevron-up font-16 blue-color show-on-mobile" style={{marginLeft: 10}}></i>}
                </div>
              </div>
              <Row>
                {this.state.showFilters ?
                  <Col style={{marginBottom: 20}} id="filters" md="2" className="">
                    <div className="white-background ">
                      <p className="padding-10 margin-0 black-color font-16 font-weight-600">Type</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}></Button>Intraday</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}></Button>Delivery</p>

                      <p className="padding-10 margin-0 black-color font-16 font-weight-600">Segment</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}></Button>Futures</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(4)} active={this.state.cSelected.includes(4)}></Button>Cash Equity</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(5)} active={this.state.cSelected.includes(5)}></Button>Options</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(6)} active={this.state.cSelected.includes(6)}></Button>Commodity</p>

                      <p className="padding-10 margin-0 black-color font-16 font-weight-600">Exchange</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(7)} active={this.state.cSelected.includes(7)}></Button>NSE</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(8)} active={this.state.cSelected.includes(8)}></Button>BSE</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(9)} active={this.state.cSelected.includes(9)}></Button>MCX</p>

                      <p className="padding-10 margin-0 black-color font-16 font-weight-600">Rating</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(10)} active={this.state.cSelected.includes(10)}></Button>Above 4.5</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(11)} active={this.state.cSelected.includes(11)}></Button>3 to 4.5</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(12)} active={this.state.cSelected.includes(12)}></Button>Below 3</p>

                      <p className="padding-10 margin-0 black-color font-16 font-weight-600">Strategy Type</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(13)} active={this.state.cSelected.includes(13)}></Button>Indicator</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(14)} active={this.state.cSelected.includes(14)}></Button>Non-Indicator</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(15)} active={this.state.cSelected.includes(15)}></Button>Data Analysis</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(16)} active={this.state.cSelected.includes(16)}></Button>Combination</p>

                      <p className="padding-10 margin-0 black-color font-16 font-weight-600">Profit</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(17)} active={this.state.cSelected.includes(17)}></Button>Last 3 Months</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(18)} active={this.state.cSelected.includes(18)}></Button>Last 3 Weeks</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(19)} active={this.state.cSelected.includes(19)}></Button>Last 3 Days</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(20)} active={this.state.cSelected.includes(20)}></Button>High Risk High ROI</p>

                      <p className="padding-10 margin-0 black-color font-16 font-weight-600">Volumne</p>
                      <p className="padding-10 margin-0 grey-color font-12 font-weight-100"><Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(21)} active={this.state.cSelected.includes(21)}></Button>AB Volume</p>

                      <i onClick={this.clearAll.bind(this)} style={{marginLeft: 15}} className="cursor-pointer fa fa-times font-12 grey-color show-on-mobile"></i>
                      <span style={{marginLeft: 10, fontSize: 12}} className="font-family grey-color">Clear All</span>

                      <div className="divider"></div>
                    </div>
                  </Col>
                : null}
                <Col style={{marginTop: 10}} xs="12" sm="12" md="10">
                  <Row>
                    <Col sm="12" md="6" lg="4">
                      <ProductCard />
                    </Col>
                    <Col sm="12" md="6" lg="4">
                      <ProductCard />
                    </Col>
                    <Col sm="12" md="6" lg="4">
                      <ProductCard />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm="12" md="4">
                      <ProductCard />
                    </Col>
                    <Col sm="12" md="4">
                      <ProductCard />
                    </Col>
                    <Col sm="12" md="4">
                      <ProductCard />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm="12" md="4">
                      <ProductCard />
                    </Col>
                    <Col sm="12" md="4">
                      <ProductCard />
                    </Col>
                    <Col sm="12" md="4">
                      <ProductCard />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm="12" md="4">
                      <ProductCard />
                    </Col>
                    <Col sm="12" md="4">
                      <ProductCard />
                    </Col>
                    <Col sm="12" md="4">
                      <ProductCard />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <div className="pagination">
                <Pagination size="md" aria-label="Page navigation example">
                    <PaginationItem>
                      <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        4
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        5
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        6
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        7
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink last href="#" />
                    </PaginationItem>
                  </Pagination>
                </div>
            </Container>
          </div>
        </div>
    )
  }
}
