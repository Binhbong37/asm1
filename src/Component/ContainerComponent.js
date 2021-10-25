import React, { Component } from 'react';
import Menu from './menuComponent';
import RenderStaff from './Staffdetail';
import Department from './DepartmenComponen';
import Salary from './SalaryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {ROLE} from '../staff/staffs';
import {STAFFS} from '../staff/staffs';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";



class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      staffs: STAFFS,
      role: ROLE,
      selectedStaff: null
    }
  }

  render() {
   
    return (
      <div style={{display:"flex", flexDirection:"column", minHeight:"100vh"}}>
           <Header/>
           <div  style={{flex:1}}>
           <Switch>
              <Route exact path='/nhanvien' component={() => <Menu staffs={this.state.staffs}/>}/>
              <Route path="/nhanvien/:id"
              component={({match}) => <RenderStaff staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.id, 10)) [0]}/>}/>
              <Route path="/phongban">
                <Department />
              </Route>
              <Route path="/bangluong">
                <Salary staffs={this.state.staffs}/>
              </Route>
              <Redirect to="/nhanvien" />
           </Switch>
           </div>
          <Footer/>
      </div>
    );
  }
  }

export default withRouter(Main);
