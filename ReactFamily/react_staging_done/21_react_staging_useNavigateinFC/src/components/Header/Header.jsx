import React, { Component } from 'react'
// withRouter是一个函数，因为首字母是小写的；组件的首字母是大写的
import { useNavigate } from 'react-router-dom'

const Header = ()=> {
  const navigate = useNavigate();

  // 回退
  const back = ()=>{
    navigate(-1)
  }

  // 前进
  const forward = ()=>{
    navigate(1)
  }

  // go
  // 正数向前进n步，负数向后退n步
  const go = ()=>{
    navigate(2)
  }

  // render() {
    // console.log('header',this.props)
    return (
        <div className="page-header">
          <h2>React Router Demo</h2>
          <button onClick={back}>回退</button>&nbsp;
          <button onClick={forward}>前进</button>&nbsp;
          <button onClick={go}>go</button>
        </div>
    )
  // }
}
// withRouter能够接收一般组件
export default Header;
