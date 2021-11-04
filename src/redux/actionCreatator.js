import * as ActionTypes from "./actionTypes";
import { STAFFS } from "../staff/staffs";

export const fetchStaff = () => (dispatch) => {
    dispatch(StaffsLoading(true));

    setTimeout(() => {
        dispatch(addStaffs(STAFFS))
    }, 2000)
}
export const StaffsLoading = () => {
    return{
        type: ActionTypes.STAFFS_LOADING
    }
};
export const staffsFailed = (errMess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errMess
})
export const addStaffs = (staff) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staff
})