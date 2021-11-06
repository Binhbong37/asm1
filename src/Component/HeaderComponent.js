import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, Collapse, NavbarToggler, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)

    this.state= {
      isNavOpen: false
    };
    this.toggleNav=this.toggleNav.bind(this)
  }
  toggleNav() {
    this.setState({isNavOpen: !this.state.isNavOpen})
  }
  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand className="mr-auto" href="/">
              <img src="asset/images/logo.png" height="30" width="40" alt="/"/>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/nhan-vien">
                    <span className="fa fa-users fa-lg"></span> Nhân viên
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/phong-ban">
                  <span className="fa fa-address-card fa-lg"></span> Phòng ban
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/bang-luong">
                    <span className="fa fa-money fa-lg"></span> Bảng lương
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </div>
      </Navbar>
      
    </React.Fragment>
    );
  }
}

export default Header;