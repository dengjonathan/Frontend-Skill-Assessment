import {connect} from 'react-redux';

import TagList from '../components/TagList/TagList';
import {hideTagAction} from '../actions/tagListActions';

const mapStateToProps = state => ({
  tags: state.tagList.filter(tag => tag.displayed)
});

const mapDispatchToProps = dispatch => ({
  hide: label => dispatch(hideTagAction(label))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagList);