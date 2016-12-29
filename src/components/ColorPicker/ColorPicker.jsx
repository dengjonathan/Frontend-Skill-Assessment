import React from 'react';

import './ColorPicker.css';

export default ({selected, onChangeColor, colors}) => (
  <div className='colorPicker'>
    {colors.map(color => (
      <div 
        className={selected === color ? 'selected colorChoice': 'colorChoice'} 
        style={{backgroundColor: color}}
        onClick={() => onChangeColor(color)}
      />
    ))}
  </div>
);
