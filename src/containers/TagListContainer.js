import {connect} from 'react-redux';

import TagList from '../components/TagList/TagList';

const mapStateToProps = state => (
  {tags: state.tagList}
);

export default connect(mapStateToProps)(TagList);