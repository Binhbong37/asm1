import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Staffs } from "./staff";
import { Dept } from "./department"
import { Salary } from "./salary";


export const configureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            dept: Dept,
            salary: Salary
        }),
        applyMiddleware(thunk, logger)
    )
    return store; 
}