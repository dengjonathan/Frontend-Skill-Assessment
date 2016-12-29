import React from 'react';

import './Button.css';

export default ({label, onClick}) => (
  <button className='button' onClick={onClick}>
    {label}
  </button>
);