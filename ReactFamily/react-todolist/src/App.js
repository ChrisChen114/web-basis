import { Component } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import './App.css';


class App extends Component {
  // **************
  // state状态在哪里，操作状态的方法（-addTodo、updateTodo...）就在哪里
  //初始化状态数据
  state = {todos:[
    {id:1,name:'吃饭',done:true},
    {id:2,name:'睡觉',done:true},
    {id:3,name:'打代码',done:false},
    {id:4,name:'逛街',done:false},
  ]}

  //addTodo用于添加一条todo，接收的参数是todo对象
  // todoObj是包含id，name，done属性
  addTodo = (todoObj)=>{
    // 获取原todos
    const {todos} = this.state;
    // 追加一个todo
    const newTodos = [todoObj,...todos]
    // 更新状态
    this.setState({todos:newTodos});
  }

  //更新状态
  updateTodo = (id,done)=>{
    // 获取原todos
    const {todos} = this.state;
    // 匹配处理状态数据
    const newTodos = todos.map((todo)=>{
      if(todo.id === id){
        return {...todo,done};
      }else{
        return todo;
      }
    })
    // 更新状态
    this.setState({todos:newTodos});
  }

  // 删除一个todo
  deleteTodo = (id)=>{
    // 获取原todos
    const {todos} = this.state;
    // 删除指定id的todo数据；filter可以实现删除
    const newTodos = todos.filter((todo)=>{
      // 等于就过滤掉，不等于就返回
      return (todo.id !== id);
    })
    // 更新状态
    this.setState({todos:newTodos});
  }

  // checkAllTodo用于全选或取消全选
  checkAllTodo = (done)=>{
    // 获取原todos
    const {todos} = this.state;
    // 删除指定id的todo数据
    const newTodos = todos.map((todo)=>{
      // 等于就过滤掉，不等于就返回
      return {...todo,done};
    })
    // 更新状态
    this.setState({todos:newTodos});
  }

  // 删除已完成的任务
  deleteAllTodo = ()=>{
    // 获取原todos
    const {todos} = this.state;
    // 删除指定id的todo数据
    const newTodos = todos.filter((todo)=>{
      // 等于就过滤掉，不等于就返回
      return (!todo.done);
    })
    // 更新状态
    this.setState({todos:newTodos});
  }

  render(){
    const {todos} = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteAllTodo={this.deleteAllTodo}/>
        </div>
      </div>
    )
  }

}

export default App;
