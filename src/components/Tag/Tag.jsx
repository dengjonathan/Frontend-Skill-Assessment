import React from 'react';

export default ({label, color, hide}) => (
  <div className='tag' style={{backgroundColor: color}}>
    <span>{label}</span>
    <button onClick={hide}>X</button>
  </div>
);