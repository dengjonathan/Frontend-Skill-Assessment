import React from 'react';

import Tag from '../Tag/Tag';

export default({tags}) => (
  <div>
    {tags.map(tag => (<Tag key={tag.label} label={tag.label} color={tag.color}/>))}
  </div>
);