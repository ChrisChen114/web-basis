import React, { Component } from 'react'
import {Route,Routes,Navigate,NavLink} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink/MyNavLink'
import Message from './Message/Message'
import News from './News/News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              {/* <MyNavLink className={({ isActive }) => "list-group-item" + (isActive ? " atguigu" : "")} to="/home/news">News</MyNavLink> */}
              <NavLink className={({ isActive }) => "list-group-item" + (isActive ? " atguigu" : "")} to="/home/news">News</NavLink>
            </li>
            <li>
              <MyNavLink className={({ isActive }) => "list-group-item" + (isActive ? " atguigu" : "")} to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Routes>
            <Route path="/news" element={<News/>}/>

            {/* 虽然组件结构与v5版本一至，但写法上有一定的差异，
            父组件App.jsx中的path属性最后必须使用星号(path="/user/*")，
            子组件User.jsx中的路径都是相对于其父级路径，所以不需要像v5版本那样写全整个路径，妈妈再也不用担心我会写错地址。 */}
            <Route path="/message/*" element={<Message/>}/>
            <Route path="/" element={<Navigate to="/home/news"/>}/>
          </Routes>
          
        </div>
      </div>
    )
  }
}
