import React from 'react';

import Tag from '../Tag/Tag';
import './TagList.css';

export default({tags, hide}) => (
  <div className='tagList'>
    {tags.map(tag => (<Tag
        key={tag.label}
        label={tag.label}
        color={tag.color}
        hide={() => hide(tag.label)}/>))}
  </div>
);
