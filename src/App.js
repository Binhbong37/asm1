import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Component/HeaderComp';
import StaffList from './Component/StaffListComponent';

const App = () => {
    return (
        <BrowserRouter>
            <>
                <Header />
                <Switch>
                    <Route exact path={'/'} component={() => <StaffList />} />
                </Switch>
            </>
        </BrowserRouter>
    );
};

export default App;
