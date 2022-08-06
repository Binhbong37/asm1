import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Deparment from './Component/DeparmentComp';
import DetailStaff from './Component/DetailStaff';
import Footer from './Component/FooterComp';
import Header from './Component/HeaderComp';
import NotFoundRoute from './Component/NotFoundRoute';
import SaralyComp from './Component/SaralyComp';
import StaffList from './Component/StaffListComponent';

const App = () => {
    return (
        <BrowserRouter>
            <div className="layoutfull">
                <Header />
                <div className="centerBlock">
                    <Switch>
                        <Route
                            exact
                            path={'/'}
                            component={() => <StaffList />}
                        />
                        <Route
                            exact
                            path={'/nhan-vien/:id'}
                            component={DetailStaff}
                        />
                        <Route
                            exact
                            path={'/phong-ban'}
                            component={Deparment}
                        />
                        <Route
                            exact
                            path={'/bang-luong'}
                            component={SaralyComp}
                        />
                        <Route path={'*'} component={NotFoundRoute} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
