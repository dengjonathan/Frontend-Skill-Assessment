import React from 'react';

import Tag from '../Tag/Tag';

export default({tags, hide}) => (
  <div>
    {tags.map(tag => (<Tag
        key={tag.label}
        label={tag.label}
        color={tag.color}
        hide={() => hide(tag.label)}/>))}
  </div>
);
