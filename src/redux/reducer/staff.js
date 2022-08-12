import * as ActionTypes from '../actions/actionTypes';

export const Staffs = (
    state = {
        staffs: [],
        isLoading: true,
        isErrMess: null,
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFFS:
            return {
                ...state,
                staffs: action.payload,
                isLoading: false,
                isErrMess: null,
            };

        case ActionTypes.STAFFS_LOADING:
            return { ...state, staffs: [], isLoading: true, isErrMess: null };

        case ActionTypes.STAFFS_FAILED:
            return {
                ...state,
                staffs: [],
                isLoading: false,
                isErrMess: action.payload,
            };

        default:
            return state;
    }
};
