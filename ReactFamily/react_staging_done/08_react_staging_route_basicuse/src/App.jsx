import React, { Component } from 'react'
// 使用{}，表示里面有多个函数式分别暴露，用哪个取哪个
import {Link,Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'


export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
              {/* 在react中靠路由链接实现切换组件--编写路由链接 */}
              <Link className='list-group-item' to={"/about"}>About</Link>
              <Link className='list-group-item' to={"/home"}>Home</Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Routes>
                  <Route path='/about' element={<div><About/></div>}/>
                  <Route path='/home' element={<div><Home/></div>}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
