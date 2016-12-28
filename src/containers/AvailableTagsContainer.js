import {connect} from 'react-redux';

import AvailableTags from '../components/AvailableTags/AvailableTags';
import {destroyTagAction, displayTagAction} from '../actions/tagListActions';

const mapStateToProps = state => ({
  tags: state.tagList.filter(tag => !tag.displayed)
});

const mapDispatchToProps = dispatch => ({
  display: label => dispatch(displayTagAction(label)),
  destroy: label => dispatch(destroyTagAction(label))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailableTags);