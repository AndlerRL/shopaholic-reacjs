import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isLoading: null,
  error: null,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;