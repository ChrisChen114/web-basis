import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  // REAMME.md中，--某个组件使用：放在其自身的state中
  // mouse这个只在Item组件中使用
  // 标识鼠标移进移出
  state = {mouse:false};

  // 鼠标移进、移出的回调
  // 写成高阶函数形式
  handleMouse = (flag) => { 
    return ()=>{
      this.setState({mouse:flag});
    }
  }

  // 勾选、取消勾选某一个todo的回调
  handleCheck= (id) => { 
    return (event)=>{
      this.props.updateTodo(id,event.target.checked);
    }
  }

  // 删除todo的一个回调
  handleDelete = (id) => { 
    // confirm前面需要加window，是个坑
    if(window.confirm('确定删除吗？')){
      this.props.deleteTodo(id);
    }
    
  }

  render() {
    // 结构赋值
    const {id,name,done} = this.props;
    const {mouse} = this.state;

    return (
      //设置鼠标移进移出时的背景颜色 style={{backgroundColor:this.state.mouse? '#ddd'-奶奶灰:'white'}} 
      <li style={{backgroundColor:mouse? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          {/* 设置一个默认值用defaultChecked，不能使用checked-会导致一直被勾选状态 */}
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        {/* 根据鼠标mouse移进移出，将‘删除’按钮显示或不显示 */}
        <button onClick={()=>this.handleDelete(id)} className='btn btn-danger' style={{display:mouse?'block':'none'}}>删除</button>
      </li>
    )
  }
}
