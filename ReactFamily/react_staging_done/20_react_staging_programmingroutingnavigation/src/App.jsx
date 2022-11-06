import React, { Component } from 'react'
// 使用{}，表示里面有多个函数式分别暴露，用哪个取哪个
import {NavLink,Navigate, Route,Routes} from 'react-router-dom'
// Home和About是路由组件
import Home from './pages/Home/Home'
import About from './pages/About/About'
// Header是一般组件
import Header from './components/Header/Header'
import MyNavLink from './components/MyNavLink/MyNavLink'


export default class App extends Component {
  render() {

    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 在react中靠路由链接实现切换组件--编写路由链接 */}
             
              {/* 标签体内容About会传递给children属性 */}

              {/* 未实现动态高亮 */}
              {/* <MyNavLink to="/about">About</MyNavLink> */}
              {/* <MyNavLink to="/home">Home</MyNavLink> */}
              {/* 实现了高亮 */}
              {/* <MyNavLink className={({ isActive }) =>"list-group-item" + (isActive ? " atguigu" : "")} to="/about">About</MyNavLink>
              <MyNavLink className={({ isActive }) =>"list-group-item" + (isActive ? " atguigu" : "")} to="/home">Home</MyNavLink> */}
              {/* 实现了高亮 */}
              <NavLink className={({ isActive }) => "list-group-item" + (isActive ? " atguigu" : "")} to="/about">About</NavLink>
              <NavLink className={({ isActive }) => "list-group-item" + (isActive ? " atguigu" : "")} to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Routes>
                    {/* 对于精确匹配，需要加exact={true} 或 exact
                        这东西不能随便开严格匹配 */}
                    <Route path="/about" element={<About/>}/>
                    <Route path="/home/*" element={<Home/>}/>
                    {/* 重定向-试用navigate */}
                    <Route path="/" element={<Navigate to="/home" />}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
