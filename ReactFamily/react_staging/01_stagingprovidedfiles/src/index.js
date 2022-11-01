import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//这是入口文件
//渲染组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  StrictMode用于检查App及其子组件写的是否合理的地方
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//性能检测-measuring performance
reportWebVitals();
