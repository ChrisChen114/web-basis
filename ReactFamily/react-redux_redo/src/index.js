import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store.js'

const root = ReactDOM.render(
  // import {Provider}，包裹App，让App所有后代容器组件都能接收到store
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
document.getElementById('root'));
