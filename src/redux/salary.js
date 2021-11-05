import * as ActionTypes from "./actionTypes";

const initial = {
    isLoading: true,
    salary: [],
    errMess: null
}

export const Salary = (state = initial, action) => {
    switch(action.type) {
        case ActionTypes.ADD_SALARY:
            return {...state, isLoading: false, salary: action.payload, errMess: null}

        case ActionTypes.SALARY_LOADING:
            return {...state, isLoading: true, salary: [], errMess: null}

        case ActionTypes.SALARY_FAILED:
            return {...state, isLoading: false, salary: [], errMess: action.payload}

        default:
            return state
    }
}