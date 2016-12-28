import {CREATE_TAG} from './actionTypes';

export const createTagAction = tag => ({
  type: CREATE_TAG,
  payload: tag
});