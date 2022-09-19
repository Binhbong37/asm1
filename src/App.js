import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    fetchStaff,
    fetchDepartment,
    fetchSalary,
    addStafff,
} from './redux/actions/actionCreatator';

import './App.css';
import Deparment from './Component/DeparmentComp';
import DetailStaff from './Component/DetailStaff';
import Footer from './Component/FooterComp';
import FormLogin from './Component/FormLogin';
import Header from './Component/HeaderComp';
import NotFoundRoute from './Component/NotFoundRoute';
import SaralyComp from './Component/SaralyComp';
import StaffList from './Component/StaffListComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
        };
    }

    addStaff = (staff) => {
        this.props.addStafff(staff);
    };

    // toggleModal
    closeModal = () => {
        this.setState({ showForm: false });
    };

    componentDidMount() {
        this.props.fetchStaff();
        this.props.fetchDepartment();
        this.props.fetchSalary();
    }

    render() {
        const { isLoading, staffs } = this.props.stafffs;

        return (
            <BrowserRouter>
                <div className="layoutfull">
                    <Header />
                    <div className="centerBlock">
                        <Switch>
                            <Route
                                exact
                                path={'/'}
                                component={() => (
                                    <StaffList
                                        staffs={staffs}
                                        isLoading={isLoading}
                                        addStaff={this.addStaff}
                                        showForm={this.state.showForm}
                                        closeModal={this.closeModal}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path={'/nhan-vien/:id'}
                                component={() => (
                                    <DetailStaff
                                        isLoading={isLoading}
                                        staffs={staffs}
                                        showForm={this.state.showForm}
                                        closeModal={this.closeModal}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path={'/phong-ban'}
                                component={() => (
                                    <Deparment dept={this.props.dept} />
                                )}
                            />
                            <Route
                                exact
                                path={'/bang-luong'}
                                component={() => (
                                    <SaralyComp salary={this.props.salary} />
                                )}
                            />
                            <Route path={'/form-login'} component={FormLogin} />
                            <Route path={'*'} component={NotFoundRoute} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stafffs: state.staffs,
        dept: state.dept,
        salary: state.salary,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStaff: () => dispatch(fetchStaff()),
        fetchDepartment: () => dispatch(fetchDepartment()),
        fetchSalary: () => dispatch(fetchSalary()),
        addStafff: (staff) => dispatch(addStafff(staff)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
