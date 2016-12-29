import React, { Component } from 'react';

import TagListContainer from '../../containers/TagListContainer';
import AvailableTagsContainer from '../../containers/AvailableTagsContainer';
import CreateTag from '../CreateTag/CreateTag';
import './TagEditor.css';

class TagEditor extends Component {

  deleteTag() {}
  render() {
    return (
      <div className="tag-editor">
        <h5 className="tag-editor-title">TAGS</h5>
        <TagListContainer />
        <CreateTag />
        <AvailableTagsContainer />
      </div>
    );
  }
}

export default TagEditor;
