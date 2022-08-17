import * as ActionTypes from '../actions/actionTypes';

export const Dept = (
    state = {
        dept: [],
        isErrMess: null,
        isLoading: true,
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_DEPARTMENTS:
            return {
                ...state,
                dept: action.payload,
                isLoading: false,
                isErrMess: null,
            };

        case ActionTypes.DEPARTMENT_FAILED:
            return {
                ...state,
                dept: [],
                isLoading: false,
                isErrMess: action.payload,
            };
        case ActionTypes.DEPARTMENT_LOADING:
            return { ...state, dept: [], isLoading: true, isErrMess: null };

        default:
            return state;
    }
};
