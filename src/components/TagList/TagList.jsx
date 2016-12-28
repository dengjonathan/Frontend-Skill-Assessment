import React from 'react';

import Tag from '../Tag/Tag';

export default({tags, hideTag}) => {
  return (
    <div>
      {tags.filter(tag => tag.displayed)
        .map(tag => (
          <Tag 
            key={tag.label} 
            label={tag.label}
            color={tag.color}
            hideTag={() => hideTag(tag.label)}
          />
      ))}
    </div>
  );
};
