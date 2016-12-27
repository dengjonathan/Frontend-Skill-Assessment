import ADD_TO_LIST from '../actions/actionTypes';

const INITIAL_STATE = [];

export default (action, state=INITIAL_STATE) => {
  switch(action.type) {
    case ADD_TO_LIST:
      return [
        ...state,
        action.payload
       ];
    default:
      return state;
  }
};