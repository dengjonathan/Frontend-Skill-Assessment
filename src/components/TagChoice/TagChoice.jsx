import React from 'react';

export default ({label, color, destroy, display}) => (
  <div className='tag' style={{backgroundColor: color}} onClick={display}>
    <span>{label}</span>
    <button onClick={destroy}>X</button>
  </div>
);