import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import ProductCard from './productCard';
import { Pagination, PaginationItem, PaginationLink, Button, ButtonGroup, Progress } from 'reactstrap';
import { Typeahead } from 'reactstrap-typeahead';
import $ from 'jquery';
var request = require("request");

function resize() {
  console.log(window.innerWidth);
}

export default class Listings extends React.Component {
    constructor (props) {
    super(props);

    let showFilters;
    let filters = [];
    let screenWidth = window.innerWidth;
    if (screenWidth > 768)
      showFilters = true;
    else
      showFilters = false;
    this.state = { cSelected: [], showFilters, loading: false, filters: [], strategies: [], pageCount: 0 };
    this.getFilters = this.getFilters.bind(this);
    this.getStrategies = this.getStrategies.bind(this);
    this.getPageCount = this.getPageCount.bind(this);
    this.createPagination = this.createPagination.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  componentWillMount() {
    this.getStrategies(1);
    this.getFilters();
    this.getPageCount();
  }

  componentDidMount() {
    window.onresize = this.setShowFilters.bind(this);
    //this.getFilters();
  }

  getFilters() {
    var self = this;
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://test.algobulls.com/v1/landingpagefilters",
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
      console.log(response);
      self.setState({filters : response})
    });
  }

  getStrategies(number) {
    var self = this;
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://test.algobulls.com/v1/strategies/" + number,
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
      let strategies = [];
      for (var i = 0; i < 12; i++) {
        let strategy = response[0];
        strategy.id = i;
        strategies.push(strategy);
      }
      console.log(strategies);
      self.setState({strategies})
    });
  }

  getPageCount(number) {
    var self = this;
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://test.algobulls.com/v1/strategiespagecount",
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
      console.log(response);
      self.setState({pageCount : response})
    });
  }

  setShowFilters() {
    let showFilters;
    let screenWidth = window.innerWidth;

    if (screenWidth > 768)
      showFilters = true;
    else
      showFilters = false;
    this.setState({showFilters});
  }

  onCheckboxBtnClick(selected, j) {
    console.log(selected, j);
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

  createPagination() {
    let pages = []
    //this.state.pageCount
    // Outer loop to create parent
    for (let i = 0; i < 5; i++) {
      pages.push(
      <PaginationItem>
        <PaginationLink href="#">
          {i}
        </PaginationLink>
      </PaginationItem>)
    }
    return pages;
  }

  render() {
    if (this.state.filters) {
      console.log('render', this.state.filters)
      let filters_list = this.state.filters ? this.state.filters : "";
      if (Array.isArray(filters_list) && filters_list.length) {
        for (let i=0 ; i < filters_list.length ; i++) {
          let filter_title = Object.keys(filters_list[i])[0];
          let filter_values = Object.values(filters_list[i])[0];
          console.log(filter_title, filter_values);
        }
      }
      this.state.filters.map(function(e) {
        console.log(e);
      });
    }

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
                      {
                        this.state.filters.map((e,i) => {
                          return (
                            <span>
                              <p className="padding-10 margin-0 black-color font-16 font-weight-600">
                                {Object.keys(e)[0]}
                              </p>
                              {
                                Object.values(e)[0].map((el,j) => {
                                  return (
                                    <p className="padding-10 margin-0 grey-color font-12 font-weight-100">
                                      <Button style={{marginRight: 5, marginTop: -2}} color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(i, j)} active={this.state.cSelected.includes(i, j)}>
                                      </Button>
                                      {el}
                                    </p>
                                  )
                                })
                              }
                            </span>
                          )
                        })
                      }
                      <i onClick={this.clearAll.bind(this)} style={{marginLeft: 15}} className="cursor-pointer fa fa-times font-12 grey-color show-on-mobile"></i>
                      <span style={{marginLeft: 10, fontSize: 12}} className="font-family grey-color">Clear All</span>

                      <div className="divider"></div>
                    </div>
                  </Col>
                : null}
                <Col style={{marginTop: 10}} xs="12" sm="12" md="10">
                  <Row>
                    {this.state.strategies.map((strategy, i) => {
                      return (
                        <Col sm="12" md="6" lg="4">
                          <ProductCard strategy={strategy} />
                        </Col>
                      )
                    })
                    }
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
