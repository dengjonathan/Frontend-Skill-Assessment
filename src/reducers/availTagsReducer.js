import CREATE_TAG from '../actions/actionTypes';

const INITIAL_STATE = [];

export default (action, state=INITIAL_STATE) => {
  if (!action) {
    return state;
  }
  switch(action.type) {
    case CREATE_TAG:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};