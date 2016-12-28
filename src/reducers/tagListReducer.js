import {
  CREATE_TAG,
  DESTROY_TAG,
  ADD_TAGLIST,
  REMOVE_TAGLIST } from '../actions/actionTypes';

const INITIAL_STATE = [];

const findTag = (state, label) => state.map(tag => tag.label).indexOf(label);

export default (state=INITIAL_STATE, action) => {
  if (!action) {
    return state;
  }
  let index;
  switch(action.type) {
    case CREATE_TAG:
      return [
        ...state, 
        action.payload
      ];

    case DESTROY_TAG:
      index = findTag(state, action.payload);
      return index > -1
        ? [...state.slice(0, index), ...state.slice(index + 1)]
        : state;

    case ADD_TAGLIST:
      index = findTag(state, action.payload);
      return index > -1
        ? [
            ...state.slice(0 , index),
            {...state[index], displayed: true},
            ...state.slice(index + 1)
          ]
        : state;

    case REMOVE_TAGLIST:
      index = findTag(state, action.payload);
      return index > -1
        ? [
            ...state.slice(0 , index),
            {...state[index], displayed: false},
            ...state.slice(index + 1)
          ]
        : state;
    default:
      return state;
  }
};