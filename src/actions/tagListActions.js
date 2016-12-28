import {ADD_TAGLIST, REMOVE_TAGLIST} from './actionTypes';

export const addTagAction = tag => ({
  type: ADD_TAGLIST,
  payload: tag
});

export const removeTagAction = label => ({
  type: REMOVE_TAGLIST,
  payload: label
});
