import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Staffs } from "./staff";


export const configureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs
        }),
        applyMiddleware(thunk, logger)
    )
    return store; 
}