import {CREATE_COLOR} from '../actions/actionTypes';

const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) => {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case CREATE_COLOR:
      return [
        ...state,
        action.payload
      ]
    default:
      return state;
  }
};