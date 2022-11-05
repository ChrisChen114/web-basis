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
            <Route path="/message" element={<Message/>}/>
            {/* <Route path="/" element={<Navigate to="/home/message"/>}/> */}
          </Routes>
          
        </div>
      </div>
    )
  }
}
