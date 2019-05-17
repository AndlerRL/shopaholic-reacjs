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
export const departmentsIdStart = () => {
  return {
    type: actionTypes.DEPARTMENTS_BY_ID_START
  }
}
export const departmentsIdSuccess = depId => {
  return {
    type: actionTypes.DEPARTMENTS_BY_ID_SUCCESS,
    depId: depId
  }
}
export const departmentsIdFail = error => {
  return {
    type: actionTypes.DEPARTMENTS_BY_ID_FAIL,
    error: error
  }
}