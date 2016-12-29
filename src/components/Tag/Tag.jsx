import React from 'react';

import './Tag.css';

export default ({label, color, hide}) => (
  <div className='tag' style={{backgroundColor: color}}>
    <span>{label}</span>
    <div className='hide' onClick={hide}>X</div>
  </div>
);