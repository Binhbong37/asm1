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
    this.setState({isNavOpen: !this. state.isNavOpen})
  }
  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" height="30" width="40"/>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/nhanvien">
                    <span className="fa fa-users fa-lg"></span> Nhân viên
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/phongban">
                  <span className="fa fa-address-card fa-lg"></span> Phòng ban
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/bangluong">
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