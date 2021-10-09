import React, { Component } from 'react';
import { Card, Form, Navbar, NavbarBrand } from 'reactstrap';
import Menu from '../Component/menuComponent';
import {DEPARTMENTS} from '../staff/staffs';
import {ROLE} from '../staff/staffs';
import {STAFFS} from '../staff/staffs';


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      staffs: STAFFS,
      department: DEPARTMENTS,
      role: ROLE,
      selectedStaff: null
    }
  }
  onStaffSelect(staff) {
      this.setState({
          selectedStaff: staff
      });

  }
  render() {
    return (
      <div className="App">
       <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="#">Ứng dụng quản lý nhân sự v1.0</NavbarBrand> 
            </div>
          </Navbar>
          <Menu staffs={this.state.staffs} selectedStaff={this.state.selectedStaff} onStaffSelect={(staff) => this.onStaffSelect(staff)}/>
      </div>
    );
  }
  }

export default Main;
