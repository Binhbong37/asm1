import * as ActionTypes from './actionTypes';
import { baseUrl } from '../../staff/baseUrl';

export const fetchStaff = () => (dispatch) => {
    dispatch(StaffsLoading(true));

    return fetch(baseUrl + 'staffs')
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error(
                        'Error ' + response.status + ': ' + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then((response) => response.json())
        .then((staffs) => dispatch(addStaffs(staffs)))
        .catch((error) => dispatch(staffsFailed(error.message)));
};
export const StaffsLoading = () => {
    return {
        type: ActionTypes.STAFFS_LOADING,
    };
};
export const staffsFailed = (errMess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errMess,
});
export const addStaffs = (staff) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staff,
});

// XÓA NHÂN VIÊN
export const deleteStaff = (id) => (dispatch) => {
    return fetch(baseUrl + 'staffs/' + id, {
        method: 'DELETE',
    })
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error(
                        'Error ' + response.status + ': ' + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                throw error;
            }
        )
        .then((response) => response.json())
        .then((response) => {
            dispatch(fetchStaff(response));
            dispatch(fetchSalary(response));
            dispatch(fetchDepartment(response));
        })
        .catch((error) => {
            console.log('delete staffs', error.message);
            alert(
                'Your staff information could not be deleted\nError: ' +
                    error.message
            );
        });
};

// ADD Department
export const fetchDepartment = () => (dispatch) => {
    return fetch(baseUrl + 'departments')
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error(
                        'Errors: ' +
                            response.status +
                            ': ' +
                            response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((dept) => dispatch(addDepartments(dept)))
        .catch((error) => dispatch(deptFailed(error.message)));
};

export const addDepartments = (dept) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: dept,
});
export const deptFailed = (error) => ({
    type: ActionTypes.DEPARTMENT_FAILED,
    payload: error,
});

// ĐIỀU KIỆN ĐỂ CLICK SẼ HIỆN TỪNG PHÒNG BAN
export const fetchDepartOfStaff = (departmentId) => (dispatch) => {
    dispatch(staffDepartsLoading(true));

    return fetch(baseUrl + `departments/${departmentId}`)
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error(
                        'Error ' + response.status + ': ' + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then((response) => response.json())
        .then((staffs) => dispatch(addStaffOfDeparts(staffs)))
        .catch((error) => dispatch(staffDepartsFailed(error.message)));
};
export const addStaffOfDeparts = (staffs) => ({
    type: ActionTypes.ADD_STAFF_DEPART,
    payload: staffs,
});

export const staffDepartsLoading = () => ({
    type: ActionTypes.STAFFS_DEPART_LOADING,
});

export const staffDepartsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_DEPART_FAILED,
    payload: errmess,
});

// ADD SALARY
export const fetchSalary = () => (dispatch) => {
    dispatch(salaryLoading(true));

    return fetch(baseUrl + 'staffsSalary')
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error(
                        'Errors: ' +
                            response.status +
                            ': ' +
                            response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((dept) => dispatch(addSalary(dept)))
        .catch((error) => dispatch(salaryFailed(error.message)));
};
export const addSalary = (salary) => ({
    type: ActionTypes.ADD_SALARY,
    payload: salary,
});
export const salaryLoading = () => ({
    type: ActionTypes.SALARY_LOADING,
});
export const salaryFailed = (errMess) => {
    return {
        type: ActionTypes.SALARY_FAILED,
        payload: errMess,
    };
};

// THÊM NHÂN VIÊN
export const addStafff = (staff) => (dispatch) => {
    const salary = staff.salaryScale * 3000000 + staff.overTime * 200000;
    const newStaff = {
        id: staff.id,
        name: staff.name,
        doB: staff.doB,
        salaryScale: staff.salaryScale,
        startDate: staff.startDate,
        departmentId:
            staff.department === 'Sale'
                ? 'Dept01'
                : staff.department === 'HR'
                ? 'Dept02'
                : staff.department === 'Marketing'
                ? 'Dept03'
                : staff.department === 'IT'
                ? 'Dept04'
                : 'Dept05',
        annualLeave: staff.annualLeave,
        overTime: staff.overTime,
        salary: Number(salary),
        image: staff.image,
    };

    return fetch(baseUrl + 'staffs', {
        method: 'POST',
        body: JSON.stringify(newStaff),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error(
                        'Error ' + response.status + ': ' + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                throw error;
            }
        )
        .then((response) => response.json())
        .then((response) => {
            dispatch(fetchStaff(response));
            dispatch(fetchSalary(response));
            dispatch(fetchDepartment(response));
        })
        .catch((error) => {
            console.log('post staffs', error.message);
            alert(
                'Your staff information could not be posted\nError: ' +
                    error.message
            );
        });
};

// SỬA NHÂN VIÊN
export const editStaff = (staff) => (dispatch) => {
    const newStaff = {
        id: staff.id,
        name: staff.name,
        doB: staff.doB,
        salaryScale: staff.salaryScale,
        startDate: staff.startDate,
        departmentId:
            staff.department === 'Sale'
                ? 'Dept01'
                : staff.department === 'HR'
                ? 'Dept02'
                : staff.department === 'Marketing'
                ? 'Dept03'
                : staff.department === 'IT'
                ? 'Dept04'
                : 'Dept05',
        annualLeave: staff.annualLeave,
        overTime: staff.overTime,
    };

    return fetch(baseUrl + 'staffs', {
        method: 'PATCH',
        body: JSON.stringify(newStaff),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error(
                        'Error ' + response.status + ': ' + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                throw error;
            }
        )
        .then((response) => response.json())
        .then((response) => {
            dispatch(fetchStaff(response));
            dispatch(fetchSalary(response));
            dispatch(fetchDepartment(response));
        })
        .catch((error) => {
            console.log('post staffs', error.message);
            alert(
                'Your staff information could not be posted\nError: ' +
                    error.message
            );
        });
};
