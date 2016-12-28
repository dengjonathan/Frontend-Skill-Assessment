import React from 'react';
import {Provider} from 'react-redux';

import Instructions from '../Instructions';
import TagEditor from '../TagEditor';
import store from '../../store/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="app-child">
          <Instructions />
        </div>
        <div className="app-child">
          <TagEditor />
        </div>
      </div>
    </Provider>
  );
}

export default App;
