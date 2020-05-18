import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {TabuleiroDataProvider} from './context/TabuleiroData'

ReactDOM.render(
  <TabuleiroDataProvider>
    <App />
  </TabuleiroDataProvider>,
  document.getElementById('root')
);
