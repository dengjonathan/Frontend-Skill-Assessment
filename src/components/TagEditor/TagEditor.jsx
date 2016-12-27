import React, { Component } from 'react';

import Tag from '../Tag/Tag';
// An array of existing tags. Just uncomment when you want to use them.
import tagsJSON from '../../api/tags.json';
import './TagEditor.css';

class TagEditor extends Component {

  deleteTag() {

  }

  render() {
    const tags = tagsJSON.tags.map(tag => (
      <Tag label={tag.label} color={tag.color} deleteTag={this.deleteTag}/>
    ));
    return (
      <div className="tag-editor">
        <h5 className="tag-editor-title">TAGS</h5>
        {tags}
      </div>
    );
  }
}

export default TagEditor;
