import React from 'react';

import './TagChoice.css';

export default ({label, color, destroy, display}) => (
  <span onClick={display}>
    <div className='colorSample' style={{backgroundColor: color}} />
    <span className='label'>{label}</span>
  </span>
);