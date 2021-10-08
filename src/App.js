import React, { Component } from 'react';
import logo from './logo.svg';
import { Form, Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Component/menuComponent';
import './App.css';
import {DEPARTMENTS} from './staff/staffs';
import {ROLE} from './staff/staffs';
import {STAFFS} from './staff/staffs';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      staffs: STAFFS,
      department: DEPARTMENTS,
      role: ROLE
    }
  }

  render() {
    return (
      <div className="App">
       <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="#">Ứng dụng quản lý nhân sự v1.0</NavbarBrand> 
            </div>
          </Navbar>
          <Menu staffs={this.state.staffs}/>
      </div>
    );
  }
  }

export default App;
