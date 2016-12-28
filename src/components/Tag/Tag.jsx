import React from 'react';

export default ({label, color, hideTag}) => (
  <div className='tag' style={{backgroundColor: color}}>
    <span>{label}</span>
    <button onClick={hideTag}>X</button>
  </div>
);