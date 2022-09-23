import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Dept } from '../reducer/department';
import { Salary } from '../reducer/salary';
import { Staffs } from '../reducer/staff';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            dept: Dept,
            salary: Salary,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk, logger)
    );
    return store;
};
