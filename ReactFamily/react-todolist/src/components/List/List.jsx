import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/Item'
import './List.css'

export default class List extends Component {
  // 对接收的props进行：类型、必要性的限制
  //要用到静态关键字，propTypes的p要小写
  static propTypes = {
    todos:PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired,
  }

  render() {
    // 这里的todos，取的是<List 是这个todos={不是这个todos}/>
    // 这里还需要进行二次传递到Item，结构赋值后使用更方便
    const {todos,updateTodo,deleteTodo} = this.props;
    return (
        <ul className="todo-main">
          {
            /* 有多少个todos，就有多少个item，所以用map */
            //  Warning: Each child in a list should have a unique "key" prop，
            // 所以每个要加key
            // (todo)，如果就一个参数，可以简写。
            // 需要把id，name，done都传过去，id={todo.id} name={todo.name} done={todo.done}
            // 可以简写为{...todo}，会自动对应名称。然后Item就得接。
            // 还得更新done是否完成的状态。
            todos.map(todo=>{
              // 注意这里不能加this，如this.deleteTodo是错误的写法，会报错
              return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            })
          }
        </ul>
    )
  }
}
