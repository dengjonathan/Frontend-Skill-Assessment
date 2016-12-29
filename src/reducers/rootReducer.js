import {combineReducers} from 'redux';

import tagList from './tagListReducer';
import colors from './colorReducer';

export default combineReducers({
  tagList,
  colors
});