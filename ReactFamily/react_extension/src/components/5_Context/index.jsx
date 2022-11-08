/**
    一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信，比如
    祖孙，祖孙孙等
    但是父子组件用props更方便。
    注意：
	在应用开发中一般不用context, 一般都用它的封装react插件
*/

import React, { Component } from 'react'
import './index.css'
// 创建Context对象
const MyContext = React.createContext();
const {Provider,Consumer} = MyContext;

// Provider用于类式组件，Consumer用于函数式组件

export default class A extends Component {
  state = {username:'tom',age:18}

  render() {
    // 频繁的使用this.state.username，可以抽出来简写
    const {username,age} = this.state;
    return (
      <div className='parent'>
        <h3>我是A组件</h3>
        <h4>我的用户名是:{username}</h4>
        {/* <MyContext.Provider> 简写成下面的 */}
        {/* value两层花括号，外层是分割符，里面{}是表示对象 */}
        <Provider value={{username,age}}>
            <B/>
        </Provider>
        
      </div>
    )
  }
}

class B extends Component {
    // static contextType = MyContext
    // A与B这样的父子组件一般还是通过props取
    render() {
      return (
        <div  className='child'>
            <h3>我是B组件</h3>
            {/* <h4>我从A组件接收到的用户名是:{this.context}</h4> */}
            <C/>
        </div>
      )
    }
  }

//   class C extends Component {
//     // 声明接收context
//     static contextType = MyContext
//     render() {
//         // 解构赋值
//         const {username,age} = this.context
//       return (
//         <div  className='grand'>
//             <h3>我是C组件</h3>
//             <h4>我从A组件接收到的用户名是:{username},年龄是{age}</h4>
//         </div>
//       )
//     }
//   }
  
function C() {
    return (
    <div  className='grand'>
        <h3>我是C组件</h3>
        <h4>我从A组件接收到的用户名是:
        <Consumer>
            {/* 里面写一个函数 */}
            {
                // value =>{
                //     // 如果不想写span标签，就用下面的写法
                //     // 模板字符串
                //     return `${value.username},年龄是${value.age}`
                // }
                // 简写成下面形式
                value =>`${value.username},年龄是${value.age}`
            }
        </Consumer>
        </h4>
    </div>
    )
}
