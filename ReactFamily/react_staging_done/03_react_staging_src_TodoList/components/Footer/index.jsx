import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  // 全选checkbox的回调
  handleCheckAll = (event)=>{
    this.props.checkAllTodo(event.target.checked);
  }

  // 清除所有已完成任务的回调
  handleClearAllDone = ()=>{
    this.props.clearAllDone();
  }
  
  render() {
    //获取todos属性值
    const {todos} = this.props;
    // 已完成的个数
    // 数组中reduce能做条件统计、条件求和、最值
    // todo.done完成了?完成1:没完成0
    const doneCount = todos.reduce((pre,todo)=> pre+(todo.done?1:0),0)
    // 总数
    const total = todos.length;

    return (
      <div className='todo-footer'>
        <label>
          {/* defaultChecked只第一次奏效 */}
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount == total && total !== 0? true:false}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className='btn btn-danger'>清除已完成任务</button>
      </div>
    )
  }
}
