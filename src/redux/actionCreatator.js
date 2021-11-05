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

// ADD Department
export const fetchDepartment = () => (dispatch) => {

    return fetch("https://rjs101xbackend.herokuapp.com/departments")
    .then(response => {
        if(response.ok) {
            return response
        } else {
            var error = new Error("Errors: "+ response.status + ": " + response.statusText)
            error.response = response;
            throw error
        }
    }, error => {
        var errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(dept => dispatch(addDepartments(dept)))
    .catch(error => dispatch(deptFailed(error.message)))

}

export const addDepartments = (dept) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: dept
})
export const deptFailed = (error) => ({
    type: ActionTypes.DEPARTMENT_FAILED,
    payload: error 
})