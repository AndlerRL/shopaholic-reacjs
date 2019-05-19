import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isLoading: null,
  error: null,
  departments: [],
  departmentId: null
}

const start = (state, action) => {
  return updateObject(state, {
    isLoading: true,
    error: null
  })
};
const fail = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: action.error
  })
};
const fetchDepartments = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    departments: action.departments
  })
}
const departmentIdSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: null,
    error: null,
    departmentId: action.depId
  })
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.DEPARTMENTS_START:
      return start(state, action);
    case actionTypes.DEPARTMENTS_SUCCESS:
      return fetchDepartments(state, action);
    case actionTypes.DEPARTMENTS_FAILED:
      return fail(state, action);
    case actionTypes.DEPARTMENTS_BY_ID_START:
      return start(state, action);
    case actionTypes.DEPARTMENTS_BY_ID_SUCCESS:
      return departmentIdSuccess(state, action);
    case actionTypes.DEPARTMENTS_BY_ID_FAIL:
      return fail(state, action);
    default:
      return state;
  }
};

export default reducer;