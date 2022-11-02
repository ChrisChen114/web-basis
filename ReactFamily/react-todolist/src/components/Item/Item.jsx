import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {
  //这个state是Item组件自己使用
  //标识鼠标移进移出的操作
  state = {mouse:false}
  //
  handleMouse = (flag)=>{
    return()=>{
      this.setState({mouse:flag})
    }
  }

  // 勾选和取消勾选
  handleCheck = (id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked);
    }
  }

  //删除一个todo的回调
  handleDelete = (id)=>{
    return ()=>{
      if(window.confirm('确定删除吗？'))
        this.props.deleteTodo(id);
    }
  }
  // handleDelete = (id)=>{
  //   this.props.deleteTodo(id);
  // }

  render() {
    // 从
    const {id,name,done}=this.props;
    // 获取Item的状态
    const {mouse} = this.state;
    return (
      // backgroundColor中Color是大写
      <li style={{backgroundColor:mouse? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          {/* 更新checkbox的选中状态,
              设置checked之后，不允许改；
              但是设置defaultChecked也会有问题；因此
              checked需要搭配onChange事件.
          */}
            <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
            {/* <span>yyyy</span> */}
            <span>{name}</span>
        </label>
        <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
        {/* 不用写成高阶函数了 */}
        {/* <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button> */}
      </li>
    )
  }
}
