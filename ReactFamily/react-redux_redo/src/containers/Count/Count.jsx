import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    increment,
    decrement,
    incrementAsync
} from '../../redux/actions/count.js'

 class Count extends Component {
    // ××××××××××××××××××××××××××××
    // 以下是错误的写法
    // 箭头函数的 this 永远指向其上下文的 this ，任何方法都改变不了其指向
    // 下面这种写法将无法获取selectNumber，因为this指针在普通函数中，指向该函数的调用者
    // increment(){
    //     const {value} = this.selectNumber;
    //     this.props.increment(value*1);
    // }
    // 加
    increment = ()=>{
        const {value} = this.selectNumber;
        this.props.increment(value*1);
    }
    // 减
    decrement = ()=>{
        const {value} = this.selectNumber;
        this.props.decrement(value*1);
    }
    // 当前求和为奇数再加
    incrementIfOdd = ()=>{
        const {value} = this.selectNumber;
        if(this.props.count % 2 !== 0){
            this.props.increment(value*1);
        }
    }
    // 异步加
    incrementAsync = ()=>{
        const {value} = this.selectNumber;
        this.props.incrementAsync(value*1,1000);
    }

    render() {
        return (
            <div>
            <h2>我是Count组件,当前Person组件总人数为{this.props.countPerson}</h2>
            <h4>当前求和为:{this.props.count}</h4>
            <select ref={c=>this.selectNumber=c}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>&nbsp;
            <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
            <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}

// connect(mapStateToProps,mapActionToProps)(UI组件)
export default connect(
    // state=>({}),需要一个()？？？
    state=>({
        count:state.count,
        countPerson:state.persons.length
    }),
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)
