import React from 'react';

import './ColorPicker.css';

const chunkArray = (arr, n) => {
  const result = [];
  for (let i = 0; i < arr.length; i+=n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}
export default ({selected, displayed, onChangeColor, colors}) => {
  const choices = colors.map(color => (
        <td 
          className={selected === color ? 'selected colorChoice': 'colorChoice'} 
          style={{backgroundColor: color}}
          onClick={() => onChangeColor(color)}
        />
  ));
  const rows = chunkArray(choices, 4)
    .map(row => (<tr>{row}</tr>));
  return (
  <table className={displayed ? 'colorPicker' : 'hidden'} cellpadding="0" cellspacing='0'>
    <tbody>
      {rows}
    </tbody>
  </table>
  );
};
