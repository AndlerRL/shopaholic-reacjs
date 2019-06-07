import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isLoading: null,
  error: null,
  hasValue: {
    Regional: false,
    Nature: false,
    Seasonal: false
  },
  departments: [],
  department: [],
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
  const hasValue = updateObject(state.hasValue, {
    [action.name]: !state.hasValue[action.name],
  });

  return updateObject(state, {
    error: null,
    departmentId: action.departmentId,
    department: hasValue[action.name] ? 
      state.department.concat(action.department) :
      state.department.length && hasValue[action.name] ?
        state.department.concat(action.department) : 
        state.department.filter(id => id.department_id !== action.departmentId),
    hasValue: hasValue
  })
};
const confirmDepartmentsError = (state, action) => {
  return updateObject(state, {
    error: null
  })
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.DEPARTMENTS_START:
      return start(state, action);
    case actionTypes.DEPARTMENTS_SUCCESS:
      return fetchDepartments(state, action);
    case actionTypes.DEPARTMENTS_FAILED:
      return fail(state, action);
    case actionTypes.DEPARTMENTS_BY_ID_SUCCESS:
      return departmentIdSuccess(state, action);
    case actionTypes.DEPARTMENTS_BY_ID_FAIL:
      return fail(state, action);
    case actionTypes.DEPARTMENTS_CONFIRM_ERROR:
      return confirmDepartmentsError(state, action);
    default:
      return state;
  }
};

export default reducer;