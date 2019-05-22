import * as actionTypes from './actionTypes';

export const departmentsStart = () => {
  return {
    type: actionTypes.DEPARTMENTS_START
  }
}
export const departmentsSuccess = departments => {
  return {
    type: actionTypes.DEPARTMENTS_SUCCESS,
    departments: departments
  }
}
export const departmentsFail = error => {
  return {
    type: actionTypes.DEPARTMENTS_FAILED,
    error: error
  }
}
export const fetchDepartments = departments => {
  return {
    type: actionTypes.FETCH_DEPARTMENTS,
    departments: departments
  }
}
export const departmentsIdStart = () => {
  return {
    type: actionTypes.DEPARTMENTS_BY_ID_START
  }
}
export const departmentsIdSuccess = (departmentId, department) => {
  return {
    type: actionTypes.DEPARTMENTS_BY_ID_SUCCESS,
    departmentId: departmentId,
    department: department
  }
}
export const departmentsIdFail = error => {
  return {
    type: actionTypes.DEPARTMENTS_BY_ID_FAIL,
    error: error
  }
}
export const fetchDepartmentsId = (departmentId, department) => {
  return {
    type: actionTypes.FETCH_DEPARTMENTS_ID,
    departmentId: departmentId,
    department: department
  }
}