import * as ActionTypes from "./actionTypes";


export const Dept = (state = {
    dept:[],
    isErrMess:null
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DEPARTMENTS:
            return {...state, dept: action.payload, isErrMess: null}

        case ActionTypes.DEPARTMENT_FAILED:
            return {...state, dept: [], isErrMess: action.payload}


        default:
            return state
    }
}