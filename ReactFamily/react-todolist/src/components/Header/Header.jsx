import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './Header.css'
//{nanoid}不是默认导出，需要加{}

export default class Header extends Component {
    //要用到静态关键字，propTypes的p要小写
    // 对接收的props进行：类型、必要性的限制
    static propTypes = {
      addTodo:PropTypes.func.isRequired,
    }

  //键盘事件的回调
  // 借助event事件对象，拿到当前操作的对象
  handleKeyUp = (event)=>{
    // 结构赋值
    const {keyCode,target} = event;
    //判断是不是键盘上的回车键
    if(keyCode !== 13){
        return;
    }
    // 添加的todo名字不能为空;最好去除下空格
    if(target.value.trim() === ''){
      alert('名字不能为空');
      return;
    }
    // 准备好一个todo对象
    //将Header获取的数据传给App
    const todoObj = {id:nanoid(),name:target.value,done:false};
    // 子组件给父组件传递数据，需要父建立一个函数addTodo,这样就能双向通信
    this.props.addTodo(todoObj);
    // 清空
    target.value = '';
  }

  render() {
    return (
        <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
    )
  }
}
