import * as ActionTypes from "./actionTypes";
import { baseUrl } from "../staff/baseUrl"

export const fetchStaff = () => (dispatch) => {
    dispatch(StaffsLoading(true));

    return fetch(baseUrl + 'staffs')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(staffs => dispatch(addStaffs(staffs)))
        .catch(error => dispatch(staffsFailed(error.message)));

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
// ĐIỀU KIỆN ĐỂ CLICK SẼ HIỆN TỪNG PHÒNG BAN

export const fetchDepartOfStaff = (departmentId) => (dispatch) => {

    dispatch(staffDepartsLoading(true));

    return fetch(baseUrl + `departments/${departmentId}`)
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(staffs => dispatch(addStaffOfDeparts(staffs)))
        .catch(error => dispatch(staffDepartsFailed(error.message)));
}
export const addStaffOfDeparts = (staffs) => ({
    type: ActionTypes.ADD_STAFF_DEPART,
    payload: staffs
});

export const staffDepartsLoading = () => ({
    type: ActionTypes.STAFFS_DEPART_LOADING
});

export const staffDepartsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_DEPART_FAILED,
    payload: errmess
});

// ADD SALARY
export const fetchSalary = () => (dispatch) => {
    dispatch(salaryLoading(true))

    return fetch(baseUrl + "staffsSalary")
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
    .then(dept => dispatch(addSalary(dept)))
    .catch(error => dispatch(salaryFailed(error.message)))
}
export const addSalary = (salary) => ({
    type: ActionTypes.ADD_SALARY,
    payload: salary
})
export const salaryLoading = () => ({
    type: ActionTypes.SALARY_LOADING
})
export const salaryFailed = (errMess) => {
    return{
        type: ActionTypes.SALARY_FAILED,
        payload: errMess
    }
}

// THÊM NHÂN VIÊN 

export const addStaff = (staff) => (dispatch) => {
    const newStaff = {
        name: staff.name,
        doB: staff.doB,
        salaryScale: staff.salaryScale,
        startDate: staff.startDate,
        departmentId: staff.department,
        annualLeave: staff.annualLeave,
        overTime: staff.overTime,
        image: staff.image,
    };
    console.log(staff)
    newStaff.date = new Date().toISOString();
    console.log(newStaff)
    return fetch(baseUrl + 'staffs', {
            method: "POST",
            body: JSON.stringify(newStaff),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => {
            dispatch(addStaffs(response))
        })
        .catch(error => {
            console.log('post staffs', error.message);
            alert('Your staff information could not be posted\nError: ' + error.message);
        });
};