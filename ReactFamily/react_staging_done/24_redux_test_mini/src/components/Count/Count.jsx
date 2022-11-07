import React, { Component } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement } from '../../redux/count_reducer.js'
// 引入store，用于获取redux中保存的状态
import store from '../../redux/store.js'
import { useEffect } from 'react';

// 组件有自己的状态state
const state={salary:100000000}

const Count = ()=> {
    //count是属性名,交给reducer
    // 但是还可以有自己的状态，比如salary

    

    // 要实现什么功能？默认在News上，然后等2s跳转到Message上，
    // 代码如下：
    // 挂载
    // 需要React Hooks！我们在类组件中使用的所有life-cycle方法也可以通过React Hooks在函数组件中使用，甚至是以更好的方式。阅读更多关于React钩子的信息：https://reactjs.org/docs/hooks-intro.html
    // 在这种情况下，componentDidMount的等价物是：
    // functional component 中使用
    // useEffect(()=>{
    //     // 检测redux中状态的变化，只要变化，就调用render
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // })
    

    // 加法
    // increment=()=>{
        // value取出来是字符串，因此需要在最下面*1转为数字类型
        // var options=$("#numbers option:selected"); //获取选中的项
        // const {value} = options.val();//拿到选中项的值
        // const {value} = this.selectNumber;
        // console.log('value',value)
        // const value = 1;
        // // 
        // store.dispatch({type:'increment',data:value*1})
    // }

    // // 减法
    // decrement=()=>{
    //     const {value} = this.selectNumber;
    //     const {count} = this.state;
    //     this.setState({count:count-value*1});
    // }

    // // 奇数再加
    // incrementIfOdd=()=>{
    //     const {value} = this.selectNumber;
    //     const {count} = this.state;
    //     if(count % 2 !== 0){
    //         this.setState({count:count+value*1});
    //     }
    // }

    // // 异步加
    // // 设置个时间
    // incrementAsync=()=>{
    //     const {value} = this.selectNumber;
    //     const {count} = this.state;
    //     setTimeout(()=>{
    //         this.setState({count:count+value*1});
    //     },500)
    // }
    
    // 获取count值
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

//   render() {
    // return (
    //     <div>
    //         <div>
    //             <h1>当前求和为：{count}</h1>
    //             <button
    //                 aria-label="Increment value"
    //                 onClick={() => dispatch(increment())}
    //             >
    //                 Increment
    //             </button>
    //             <span>{count}</span>
    //             <button
    //                 aria-label="Decrement value"
    //                 onClick={() => dispatch(decrement())}
    //             >
    //                 Decrement
    //             </button>
    //         </div>
    //     </div>
    // )


    return (
        <div>
            <div>
                <h1>当前求和为：{count}</h1>
                {/* select id="numbers" ref={c=>{this.selectNumber = c}} */}
                <select id="numbers" >
                    <option key={2} value="1">1</option>
                    <option key={3} value="2">2</option>
                    <option key={4} value="3">3</option>
                </select>&nbsp;
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>&nbsp;
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>&nbsp;
                {/* <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp; */}
            </div>
        </div>
    )


}

export default Count;
