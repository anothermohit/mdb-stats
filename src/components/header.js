import React from 'react';
import {Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div style={{height: 60}} className="fixed-position white-background full-width z-index-100">
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
            <DropdownMenu right style={{position: 'absolute', top: 48, right: 0}}>
              <DropdownItem>
                <Link to="/dashboard" className="no-decoration black-color">
                  Dashboard
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/profile" className="no-decoration black-color">
                  Profile
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/portfolio" className="no-decoration black-color">
                  Your Portfolio
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/fundbook" className="no-decoration black-color">
                  Your Fundbook
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/tradebook" className="no-decoration black-color">
                  Your Tradebook
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/login" className="no-decoration black-color">
                  Login
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Container>
      </div>
    )
  }
}
