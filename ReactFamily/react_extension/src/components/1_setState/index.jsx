import React, { Component } from 'react'

export default class Demo extends Component {
    state = {count:0};

    // 写法一，对象式的setState
    // (1). setState(stateChange, [callback])------对象式的setState
    // 1.stateChange为状态改变对象(该对象可以体现出状态的更改)
    // 2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
    // add = ()=>{
    //   // 1. 获取原来的count值
    //   const {count} = this.state;
    //   // 2. 更新状态
    //   this.setState({count:count+1},()=>{
    //     // 此处可以得到想要的结果，是更新状态后的值
    //     console.log('count--',this.state.count)
    //   });
    //   // react的状态更新是异步的,下一行的输出得不到想要的结果
    // //   console.log('count--',this.state.count)
    // }

    // 写法二：函数式的setState
    // (2). setState(updater, [callback])------函数式的setState
    // 1.updater为返回stateChange对象的函数。
    // 2.updater可以接收到state和props。
    // 4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
    add = ()=>{
        // 下面这3行，可以精简为一行，
    //   this.setState((state,props)=>{
    //     return {count:state.count+1}
    // });
    // 箭头右侧只有一句函数体，还想默认返回一个对象，写成小括号(),把花括号{}丢里面去。
    // 箭头左侧只有一个参数，小括号()省略了，
        this.setState(state=>({count:state.count+1}))
    }
    // 总结:
	// 	1.对象式的setState是函数式的setState的简写方式(语法糖)
	// 	2.使用原则：
	// 			(1).如果新状态不依赖于原状态 ===> 使用对象方式
	// 			(2).如果新状态依赖于原状态 ===> 使用函数方式
	// 			(3).如果需要在setState()执行后获取最新的状态数据, 
	// 				要在第二个callback函数中读取



  render() {
    return (
        <div>
            <div>
                <h1>当前求和为{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        </div>
    )
  }
}
