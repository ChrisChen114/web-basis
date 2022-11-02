import logo from './logo.svg';
import './App.css';

//下面这一行也可以这么写，直接创建并暴露App组件
//export default function App() {
//函数定义的组件，里面有返回值
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//ES6默认语法，默认暴露出去，暴露App组件
export default App;
