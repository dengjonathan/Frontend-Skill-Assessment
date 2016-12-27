import React from 'react';

export default ({label, color, deleteTag}) => (
  <div className='tag' style={{backgroundColor: color}}>
    <span>{label}</span>
    <button onClick={deleteTag}>X</button>
  </div>
);