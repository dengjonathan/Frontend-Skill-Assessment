import {connect} from 'react-redux';

import TagList from '../components/TagList/TagList';
import {hideTagAction} from '../actions/tagListActions';

const mapStateToProps = state => ({
  tags: state.tagList
});

const mapDispatchToProps = dispatch => ({
  hideTag: label => dispatch(hideTagAction(label))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagList);