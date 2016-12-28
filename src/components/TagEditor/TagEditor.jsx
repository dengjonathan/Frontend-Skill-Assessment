import React, { Component } from 'react';

import TagListContainer from '../../containers/TagListContainer';
import AvailableTagsContainer from '../../containers/AvailableTagsContainer';
// import NewTag from '../NewTag/NewTag';
// import AddTag from '../AddTag/AddTagButton';
import './TagEditor.css';

class TagEditor extends Component {

  deleteTag() {}
  render() {
    return (
      <div className="tag-editor">
        <h5 className="tag-editor-ti tle">TAGS</h5>
        <TagListContainer />
        <AvailableTagsContainer />
      </div>
    );
  }
}

export default TagEditor;
