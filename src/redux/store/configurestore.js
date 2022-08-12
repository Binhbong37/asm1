import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Staffs } from '../reducer/staff';
import { Dept } from '../reducer/department';
import { Salary } from '../reducer/salary';
import { StaffOfDeparts } from '../reducer/staffOfDept';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            dept: Dept,
            salary: Salary,
            staffofdept: StaffOfDeparts,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk, logger)
    );
    return store;
};
