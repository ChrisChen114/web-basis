//引入react核心库
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom/client';
import './index.css';
//引入App组件，注意from './App.js'，其中js和jsx后缀可以省略
import App from './App';
import reportWebVitals from './reportWebVitals';

//注意以下import的说法
//这种写法来自ES6，说明'react'文件中有多种暴露形式（比如默认暴露、分别暴露），而且{Component}不是结构赋值
// import React，{Component} from 'react'

//这是入口文件
//渲染App组件到页面
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
