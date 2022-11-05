import React, { Component } from 'react'
// 使用{}，表示里面有多个函数式分别暴露，用哪个取哪个
import {Route,Routes,Switch} from 'react-router-dom'
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
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
              {/* 在react中靠路由链接实现切换组件--编写路由链接 */}
              {/* <NavLink className='list-group-item'  to={"/about"}>About</NavLink> */}
              {/* <NavLink className='list-group-item' to={"/home"}>Home</NavLink> */}
             
              {/* 标签体内容About会传递给children属性 */}
              <MyNavLink to={"/about"}>About</MyNavLink>
              <MyNavLink to={"/home"}>Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. */}
                {/* 以下两行，这是ES5里面的写法，这样用会报错 */}
                  {/* <Route path='/about' component={About}/>
                  <Route path='/home' component={Home}/> */}

                {/* react-router-dom依赖为6版本，需要使用6版本的写法 */}
                <Routes>
                  <Switch>
                    {/* Switch组件，只匹配一个，不在执行其他的 */}
                    <Route path='/about' element={<About/>}/>
                    <Route path='/home' element={<Home/>}/>
                  </Switch>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
