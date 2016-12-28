import {connect} from 'react-redux';

import TagList from '../components/TagList/TagList';

const mapStateToProps = state => (
  {tags: state.tagListState}
);

export default connect(mapStateToProps)(TagList);