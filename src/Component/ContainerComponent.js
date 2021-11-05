import React, { Component } from 'react';
import Menu from './menuComponent';
import RenderStaff from './Staffdetail';
import Department from './DepartmenComponen';
import Salary from './SalaryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {ROLE} from '../staff/staffs';
// import {STAFFS} from '../staff/staffs';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStaff, fetchDepartment } from "../redux/actionCreatator";



class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // staffs: STAFFS,
      role: ROLE,
      selectedStaff: null
    }
  }
// EVENT ADD Employee
// onClickAdd = (data) => {
//   const { staffs } = this.state;
//   staffs.push(data)
//   this.setState({
//     staffs: staffs
//   })
// }
componentDidMount () {
  this.props.fetchStaff()
  this.props.fetchDepartment()
}
  render() {
    return (
      <div style={{display:"flex", flexDirection:"column", minHeight:"100vh"}}>
           <Header/>
           <div style={{flex:1}}>
            <Switch>
                <Route exact path='/nhan-vien' component={() => <Menu onClickAdd={this.onClickAdd} staffs={this.props.staffs.staffs}
                staffLoading={this.props.staffs.isLoading} staffErrMess={this.props.staffs.isErrMess}/>} />
                <Route path="/nhan-vien/:id"
                component={({match}) => <RenderStaff staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.id, 10))[0]}
                staffLoading={this.props.staffs.isLoading} staffErrMess={this.props.staffs.isErrMess}/>}/>
                <Route path="/phong-ban">
                  <Department department={this.props.department.dept}/>
                </Route>
                <Route path="/bang-luong">
                  <Salary staffs={this.props.staffs.staffs} staffLoading={this.props.staffs.isLoading} staffErrMess={this.props.staffs.isErrMess}/>
                </Route>
                <Redirect to="/nhan-vien" />
            </Switch>
           </div>
          <Footer/>
      </div>
    );
  }
  }
  // KẾT NỐI STATE CỦA REDUX VỚI PROPS CỦA REACT
const mapStateToProps = (state) => {
  return{
    staffs: state.staffs,
    department: state.dept
  }  
}
// DISPATCH TỪ REDUX
const mapDispatchToProps = (dispatch) => ({
  fetchStaff: () => dispatch(fetchStaff()),
  fetchDepartment: () => dispatch(fetchDepartment())

})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
