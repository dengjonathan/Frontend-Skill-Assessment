import React from 'react';

import TagChoice from '../TagChoice/TagChoice';
import './AvailableTags.css';

export default ({tags, destroy, display, value, onChangeValue}) => (
  <table className='availableTags'>
    <tbody>
      <tr><td><input placeholder='Type to add a tag.' value={value} onChange={onChangeValue}/></td></tr>
        {tags.map(tag => (<tr key={tag.label}><td className='tagChoice'><TagChoice
            label={tag.label}
            color={tag.color}
            display={() => display(tag.label)}
            destroy={() => destroy(tag.label)}/></td></tr>))}
    </tbody>
  </table>
);
