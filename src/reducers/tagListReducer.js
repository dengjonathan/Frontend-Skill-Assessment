import {ADD_TAGLIST, REMOVE_TAGLIST} from '../actions/actionTypes';

export const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) => {
  if (!action) {
    return state;
  }
  switch(action.type) {
    case ADD_TAGLIST:
      // if tag not created, don't display tag
      // if (action.getState().availTagsState
      //   .map(tag => tag.label)
      //   .indexOf(action.payload.label) < 0) {
      //     return state;
      return [
        ...state,
        action.payload
       ];
    case REMOVE_TAGLIST:
      const index = state.map(tag => tag.label).indexOf(action.payload);
      return index > -1
        ? [...state.slice(0, index), ...state.slice(index + 1)]
        : state;
    default:
      return state;
  }
};