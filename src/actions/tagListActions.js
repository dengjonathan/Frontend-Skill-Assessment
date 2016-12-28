import {
  CREATE_TAG,
  DESTROY_TAG,
  ADD_TAGLIST,
  REMOVE_TAGLIST} from './actionTypes';

export const createTagAction = tag => ({
  type: CREATE_TAG,
  payload: tag
});

export const destroyTagAction = label => ({
  type: DESTROY_TAG,
  payload: label
});

export const displayTagAction = tag => ({
  type: ADD_TAGLIST,
  payload: tag
});

export const hideTagAction = label => ({
  type: REMOVE_TAGLIST,
  payload: label
});
