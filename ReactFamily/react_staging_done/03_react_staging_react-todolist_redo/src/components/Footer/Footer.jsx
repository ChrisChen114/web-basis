import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  // 用于实现全选或取消全选
  handleAllDone = (event)=>{
    this.props.checkAllTodo(event.target.checked);
  }

  // 删除已完成的任务
  handleDeleteAllTodo = ()=>{
    this.props.deleteAllTodo();
  }

  

  render() {
    const {todos} = this.props;
    // 已完成的个数
    // reduce可以进行有条件的统计
    const doneCount = todos.reduce((pre,todo)=>{ return pre+(todo.done?1:0)},0)
    // 总数
    const total = todos.length;
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={this.handleAllDone} checked={doneCount === total && total !== 0? true:false}/>
            </label>
            <span>
                <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button className="btn btn-danger" onClick={this.handleDeleteAllTodo}>清除已完成任务</button>
      </div>
    )
  }
}
