import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import {
    addStafff,
    editStaff,
    fetchDepartment,
    fetchSalary,
    fetchStaff,
} from './redux/actions/actionCreatator';

import './App.css';
import Deparment from './Component/DeparmentComp';
import DetailStaff from './Component/DetailStaff';
import Footer from './Component/FooterComp';
import Header from './Component/HeaderComp';
import NotFoundRoute from './Component/NotFoundRoute';
import SaralyComp from './Component/SaralyComp';
import StaffList from './Component/StaffListComponent';
import DepartmentDetail from './Component/DepartmentDetail';
import Test from './Component/Test';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            toggleModal: false,
        };
    }

    addStaff = (staff) => {
        this.props.addStafff(staff);
    };

    editStaff = (staff) => {
        this.props.editStaff(staff);
    };

    componentDidMount() {
        this.props.fetchStaff();
        this.props.fetchDepartment();
        this.props.fetchSalary();
    }

    handleToggleModal = () => {
        this.setState({
            toggleModal: !this.state.toggleModal,
        });
    };
    render() {
        const { isLoading, staffs } = this.props.stafffs;

        return (
            <Fragment>
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
                                        handleToggleModal={
                                            this.handleToggleModal
                                        }
                                        toggleModal={this.state.toggleModal}
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
                                        editStaff={this.editStaff}
                                        handleToggleModal={
                                            this.handleToggleModal
                                        }
                                        toggleModal={this.state.toggleModal}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path={'/phong-ban/:dept'}
                                component={() => <DepartmentDetail />}
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
                            <Route
                                exact
                                path={'/test'}
                                component={() => <Test />}
                            />

                            <Route path={'*'} component={NotFoundRoute} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stafffs: state.staffs,
        dept: state.dept,
        salary: state.salary,
        deptId: state.staffofdept,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStaff: () => dispatch(fetchStaff()),
        fetchDepartment: () => dispatch(fetchDepartment()),
        fetchSalary: () => dispatch(fetchSalary()),
        addStafff: (staff) => dispatch(addStafff(staff)),
        editStaff: (staff) => dispatch(editStaff(staff)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
