import React from 'react';
import ReactDOM from 'react-dom';

import App from './components';
import './index.css';
import './store/store'; // init Redux store
import loadInitial from './utils/loadInitial' 

loadInitial(); //load initial tags into Redux store

ReactDOM.render(
  <App />,
  document.getElementById('lexicata')
);
