import React, { Component } from 'react';
import { Card, Form, Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menuComponent';
import Home from './Homecomponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DEPARTMENTS} from '../staff/staffs';
import {ROLE} from '../staff/staffs';
import {STAFFS} from '../staff/staffs';
import { Switch, Route, Redirect } from "react-router-dom";


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
    const Homepage = () => {
      return(
        <Home/>
      )
    }
    return (
      <div>
           <Header/>
           <Switch>
             <Route path="/home" component={Homepage} />
            <Route exact path='/nhanvien' component={() => <Menu staffs={this.state.staffs}/>}/>
            <Redirect to="/nhanvien" />
           </Switch>
          <Footer/>
      </div>
    );
  }
  }

export default Main;
