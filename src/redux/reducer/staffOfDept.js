import * as ActionTypes from '../actions/actionTypes';
const initial = {
    isLoading: true,
    errMess: null,
    staffOfDeparts: [],
};
export const StaffOfDeparts = (state = initial, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFF_DEPART:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                staffOfDeparts: action.payload,
            };
        case ActionTypes.STAFFS_DEPART_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                staffOfDeparts: [],
            };
        case ActionTypes.STAFFS_DEPART_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                staffOfDeparts: [],
            };
        default:
            return state;
    }
};
