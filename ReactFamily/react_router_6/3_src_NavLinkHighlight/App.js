import React from 'react'
import {Link,NavLink,Routes,Route,Navigate} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
  // 实现自定义高亮，放在这里写，是提高代码可读性，否则代码太长
  function computedClassName({isActive}){
    return isActive?'list-group-item atguigu' : "list-group-item"
  }

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
            {/* 路由链接 */}
            <NavLink className={ computedClassName} to="/about" >About</NavLink>
            <NavLink className={ computedClassName}  to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {/* Routes-一个匹配上了，不再继续匹配 */}
              <Routes>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/' element={<Navigate to="/about"/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
