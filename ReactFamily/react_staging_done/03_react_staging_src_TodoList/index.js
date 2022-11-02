//引入react核心库
import React from "react";
// 引入ReactDOM
import  ReactDOM from "react-dom/client";
//引入App
import App from './App'

//  ReactDOM.render(<App/>,document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  StrictMode用于检查App及其子组件写的是否合理的地方
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



//下面这种createDOM和render分开的写法要搭配App.jsx的function App() {   return ( ......
// const root = ReactDOM.createDOM(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );