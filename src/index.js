import React from 'react';
import ReactDOM from 'react-dom';

import App from './components';
import loadInitial from './utils/loadInitial' 
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('lexicata')
);

loadInitial(); //load initial tags from API into Redux store