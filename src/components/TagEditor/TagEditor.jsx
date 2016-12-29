import React, { Component } from 'react';

import TagListContainer from '../../containers/TagListContainer';
import CreateTag from '../CreateTag/CreateTag';
import './TagEditor.css';

class TagEditor extends Component {

  deleteTag() {}
  render() {
    return (
      <div className="tag-editor">
        <h5 className="tag-editor-title">TAGS</h5>
        <TagListContainer />
        <hr />
        <CreateTag />
      </div>
    );
  }
}

export default TagEditor;
