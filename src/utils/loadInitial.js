import {dispatch} from '../store/store';
import {createTagAction, displayTagAction} from '../actions/tagListActions';
import INITIAL_TAGS from '../api/tags.json';

export default function loadInitial() {
  INITIAL_TAGS.tags.forEach(tag => {
    dispatch(createTagAction(tag));
    dispatch(displayTagAction(tag));
  });
}