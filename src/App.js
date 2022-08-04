import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Deparment from './Component/DeparmentComp';
import Header from './Component/HeaderComp';
import SaralyComp from './Component/SaralyComp';
import StaffList from './Component/StaffListComponent';

const App = () => {
    return (
        <BrowserRouter>
            <>
                <Header />
                <Switch>
                    <Route exact path={'/'} component={() => <StaffList />} />
                    <Route exact path={'/phong-ban'} component={Deparment} />
                    <Route exact path={'/bang-luong'} component={SaralyComp} />
                </Switch>
            </>
        </BrowserRouter>
    );
};

export default App;
