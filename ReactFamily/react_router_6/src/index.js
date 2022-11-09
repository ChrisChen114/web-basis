import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import Demo from './components/Demo';

const root = ReactDOM.render(
  <div>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
    {/* 这个Demo就没有被BrowserRouter包裹，它的useInRouterContext就输出false */}
    {/* 应用场景有第三方组件封装者，要检测你的环境是不是在路由环境下使用组件，就要用到这个钩子 */}
    <Demo />
  </div>,
  document.getElementById('root'));
