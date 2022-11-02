import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {PropTypes} from 'prop-types'
import './index.css'

export default class Header extends Component {
  //对接收的props进行类型、必要性的限制
  static propTypes={
    addTodo:PropTypes.func.isRequired
  }

  // 键盘事件的回调
  //获取回车键弹起后的value
  handleKeyUp = (event) => { 
    //keyCode是event.keyCode中获取键盘码值
    //结构赋值获取keyCode,target
    const {keyCode,target} = event;
    // 判断是否是回车按键
    if(keyCode !== 13) return;
    // 添加的todo名字不能为空
    if(target.value.trim() === '')
    {
      alert('输入不能为空');
      return;
    }
    // target.value是输入框里的value值
    // 准备好一个todo对象；其中用到了nanoid生成唯一的id标识
    const todoObj = {id:nanoid(),name:target.value,done:false};
    // 将todoObj传递给App
    this.props.addTodo(todoObj);
    // 清空输入
    target.value = '';
  }

   


  render() {
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handleKeyUp} type="text" placeholder='请输入你的任务名称，按回车键确认'/>
      </div>
    )
  }
}
