import { combineReducers, createStore } from "redux";
import { Staffs } from "./staff";


export const configureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs
        })
    )
    return store; 
}