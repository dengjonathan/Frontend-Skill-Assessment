import React from 'react';

import './SelectedColor.css';

export default ({color}) => (
  <div className='selectedColor'>
    <div className='colorButton' style={{backgroundColor: color, borderColor:color}}>
      <span>NEW</span>
    </div>
  </div>
);