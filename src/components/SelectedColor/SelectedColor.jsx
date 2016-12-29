import React from 'react';

import './SelectedColor.css';

export default ({color, onClick}) => (
  <div className='selectedColor' onClick={onClick}>
    <div className='colorButton' style={{backgroundColor: color, borderColor:color}}>
      <span>NEW</span>
    </div>
  </div>
);