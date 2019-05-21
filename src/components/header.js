import React from 'react';
import {Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import 'reactstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'reactstrap-typeahead';

function range(start, end) {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      searching: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div style={{height: 60}} className="grey-border shadow-sm mb-5 bg-white rounded fixed-position white-background full-width z-index-100">
        <Container>
          <a style={{marginTop: 16}} href="/" className="black-color font-20 font-weight-600 float-left no-decoration">Sample</a>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
               tag="div"
               onClick={this.toggle.bind(this)}
               data-toggle="dropdown"
               aria-expanded={this.state.dropdownOpen}
              >
              <img src="/sample/avatar.png" style={{marginTop: 14}} className="cursor-pointer avatar float-right" alt="User" />
            </DropdownToggle>
            <DropdownMenu right className="blue-color" style={{position: 'absolute', top: 48, right: 0}}>
              <Link to="/dashboard" className="no-decoration black-color">
                <DropdownItem>
                  Dashboard
                </DropdownItem>
              </Link>
              <Link to="/profile" className="no-decoration black-color">
                <DropdownItem>
                  Profile
                </DropdownItem>
              </Link>
              <Link to="/portfolio" className="no-decoration black-color">
                <DropdownItem>
                  Your Portfolio
                </DropdownItem>
              </Link>
              <Link to="/broking-account" className="no-decoration black-color">
                <DropdownItem>
                  Broking Account
                </DropdownItem>
              </Link>
              <Link to="/fundbook" className="no-decoration black-color">
                <DropdownItem>
                  Your Fundbook
                </DropdownItem>
              </Link>
              <Link to="/tradebook" className="no-decoration black-color">
                <DropdownItem>
                  Your Tradebook
                </DropdownItem>
              </Link>
              <Link to="/users" className="no-decoration black-color">
                <DropdownItem>
                  Users
                </DropdownItem>
              </Link>
              <Link to="/login" className="no-decoration black-color">
                <DropdownItem>
                  Login
                </DropdownItem>
              </Link>
            </DropdownMenu>
          </Dropdown>
          {!this.state.searching ?
            <i onClick={() => (this.setState({searching: true}))} className="fa fa-search cursor-pointer font-20 float-right margin-20 grey-color"></i>
          :
            <div>
              <i onClick={() => (this.setState({searching: false}))} className="fa fa-search cursor-pointer font-20 float-right margin-20 blue-color"></i>
              <Typeahead
                labelKey="name"
                multiple={true}
                className="half-width margin-auto padding-top-8 no-border"
                options={range(0, 1000).map((o) => o.toString())}
                placeholder={'Search ...'}
                autoFocus={true}
              />
            </div>
          }
        </Container>
      </div>
    )
  }
}
