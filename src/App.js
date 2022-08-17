import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStaff, fetchDepartment } from './redux/actions/actionCreatator';

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
        this.state = {};
    }

    addStaff = (staff) => {
        this.setState({
            ...this.state.staffs,
            staffs: this.state.staffs.concat(staff),
        });
    };

    componentDidMount() {
        this.props.fetchStaff();
        this.props.fetchDepartment();
    }

    render() {
        const { isLoading, isErrMess, staffs } = this.props.stafffs;

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
                                    <SaralyComp staffs={this.state.staffs} />
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStaff: () => dispatch(fetchStaff()),
        fetchDepartment: () => dispatch(fetchDepartment()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
