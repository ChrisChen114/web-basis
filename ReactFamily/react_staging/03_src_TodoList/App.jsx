import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  // **************
  // state状态在哪里，操作状态的方法（-addTodo、updateTodo...）就在哪里

  // REAMME.md中，--某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
  //初始化状态
  state = {todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:true},
      {id:'003',name:'打代码',done:false},
      {id:'004',name:'逛街',done:true},
  ]}

  // addTodo用于添加一个todo，接收的参数是todo对象
  //赋值+箭头函数
  addTodo = (todoObj) => { 
    // console.log('App,',data)
    // 获取原todos
    const {todos} = this.state;
    //添加数据到todos，即追加一个todo
    const newTodos = [todoObj,...todos];
    // 更新状态
    this.setState({todos:newTodos});
  }

  // updateTodo用于更新一个todo对象
  updateTodo = (id,done) => { 
    //获取状态中的todos
    const {todos} = this.state;
    // 匹配处理数据
    const newTodos = todos.map((todoObj)=>{
        if(todoObj.id === id){
            return {...todoObj,done};
        }else{
          return todoObj;
        }
    })
    this.setState({todos:newTodos});
  }

  // deleteTodo用于删除一个todo对象
  deleteTodo = (id)=>{
    // 获取原来的todos
    const {todos} = this.state;
    // 删除指定id的todo对象
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !==id;
    })
    //更新状态
    this.setState({todos:newTodos});
  }

  // checkAllTodo用于全选todo对象
  checkAllTodo = (done)=>{
    // 获取原来的todos
    const {todos} = this.state;
    //加工数据
    const newTodos = todos.map((todoObj)=>{
      // return {...todoObj,done:done-重名的话，可以只写一个};
      return {...todoObj,done};
    })
    // 更新状态
    this.setState({todos:newTodos});
  }

  // clearAllDone用于清除所有已完成的
  clearAllDone = ()=>{
    // 获取原来的todos
    const {todos} = this.state;
    // 过滤数据
    const newTodos = todos.filter((todoObj)=>{
      // return todoObj.done === false;//改写成下面简写形式
      return !todoObj.done;
    })
    // 更新状态
    this.setState({todos:newTodos});
  }

  render() {
    const {todos} = this.state;
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          {/* addTodo函数将Header和App进行连接，通过props传递数据（双向连接），
              然后App再将数据传递给List组件*/}
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}
