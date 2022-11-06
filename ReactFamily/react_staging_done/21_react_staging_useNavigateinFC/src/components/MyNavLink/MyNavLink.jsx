import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  
  render() {

    // 解构赋值
    // const {to,title} = this.props;
    // this.props会包含to，children等属性
    return (
        // <NavLink activestyle={{color: 'green'}} activeclassname='selected' className='list-group-item' {...this.props} />
        <NavLink className="list-group-item" {...this.props} />
        // <NavLink className={({ isActive }) => "list-group-item" + (isActive ? "atguigu" : "")}  {...this.props} />
        
    )
  }
}
