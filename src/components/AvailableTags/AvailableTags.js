import React from 'react';

import TagChoice from '../TagChoice/TagChoice';

export default ({tags, destroy, display}) => (
  <div>

    {tags.map(tag => (<TagChoice
        key={tag.label}
        label={tag.label}
        color={tag.color}
        display={() => display(tag.label)}
        destroy={() => destroy(tag.label)}/>))}
  </div>
);
