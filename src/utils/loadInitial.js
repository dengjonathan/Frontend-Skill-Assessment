import {dispatch} from '../store/store';
import {createTagAction, displayTagAction} from '../actions/tagListActions';
import {createColorAction} from '../actions/colorActions';
import INITIAL_TAGS from '../api/tags.json';
import INITIAL_COLORS from '../api/colors.json';

const loadTags = () => {
  INITIAL_TAGS.tags.forEach(tag => {
    dispatch(createTagAction(tag));
    dispatch(displayTagAction(tag));
  });
};

const loadColors = () => {
  INITIAL_COLORS.colors.forEach(color => dispatch(createColorAction(color)));
};

export default function loadInitial() {
  loadTags();
  loadColors();
};

