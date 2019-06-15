import React from 'react';
import {Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import 'reactstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'reactstrap-typeahead';
import * as ls from "local-storage";
import Swal from 'sweetalert2';

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
  
  login() {
      Swal.fire({
      title: 'Login',
      text: 'Please enter your mobile number',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Verify',
      confirmButtonColor: '#4F6DF5',
      showLoaderOnConfirm: true,
      inputPlaceholder: '+919013468987',
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.value) {
          Swal.fire({
          title: 'Verify Mobile Number',
          text: 'Please enter the OTP received on your mobile',
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          confirmButtonText: 'Verify',
          confirmButtonColor: '#4F6DF5',
          inputPlaceholder: '******',
          showLoaderOnConfirm: true,
          preConfirm: (login) => {
            return fetch(`//api.githu.com/users/${login}`)
              .then(response => {
                if (!response.ok) {
                  throw new Error(response.statusText)
                }
                return response.json()
              })
              .catch(error => {
                Swal.showValidationMessage(
                  `Request failed: ${error}`
                )
              })
          },
          allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              title: 'Done!',
              imageUrl: result.value.avatar_url
            })
          }
        })
      }
    })
  }

  render() {
    console.log(ls.get('token'));
    return (
      <div style={{height: 60}} className="grey-border shadow-sm mb-5 bg-white rounded fixed-position white-background full-width z-index-100">
        <Container>
          <a style={{marginTop: 16}} href="/" className="black-color font-20 font-weight-600 float-left no-decoration">Sample</a>

          {ls.get('token') ?
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
                {ls.get('user') == 'partner' ?
                <Link to="/users" className="no-decoration black-color">
                  <DropdownItem>
                    Customers
                  </DropdownItem>
                </Link>
                : null}
                <DropdownItem >
                  <div onClick={() => ls.remove('token')} className="no-decoration black-color">
                    Logout
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          :
            <Link to="/login" className="no-decoration black-color">
              <img src="https://d26horl2n8pviu.cloudfront.net/link_data_pictures/images/000/364/885/shared_link/-3-images.new_grid.profile_pic_anon.png-26-da5ea6d307f82722.png?1549953959" style={{marginTop: 14}} className="cursor-pointer avatar float-right" alt="User" />
            </Link>
          }
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
