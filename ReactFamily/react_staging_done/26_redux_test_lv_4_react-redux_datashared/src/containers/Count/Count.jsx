import React, { Component } from 'react'
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
// 引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
}from '../../redux/actions/count.js'

class Count extends Component {

	state = {carName:'奔驰c63'}

	//加法
	increment = ()=>{
		const {value} = this.selectNumber
		this.props.increment(value*1);
	}
	//减法
	decrement = ()=>{
		const {value} = this.selectNumber;
		this.props.decrement(value*1);
	}
	//奇数再加
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber;
		if(this.props.count % 2 !== 0){
			this.props.increment(value*1);
		}
	}
	//异步加--异步的action
	incrementAsync = ()=>{
		const {value} = this.selectNumber;
		this.props.incrementAsync(value*1,1000);
	}

	render() {
		return (
			<div>
                <h2>我是Count组件，当前Person组件总人数人{this.props.renshu}</h2>
				<h4>当前求和为:{this.props.count}</h4>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}



// 映射状态
// const mapStateToProps= state =>({count:state})

// // 映射操作状态的方法
// const mapDispatchToProps = dispatch=>(
//     {
//         increment:number=>dispatch(createIncrementAction(number)),
//         decrement:number=>dispatch(createDecrementAction(number)),
//         incrementAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time)),
//     }
// )

// 使用connect()(),创建并暴露一个Count的容器组件
// const CountContainer = connect()(CountUI)
// export default CountContainer;

// 下面这种写法将暴露为Count
// 这个state是redux保存的状态
export default connect(
    state =>({
        // 从redux的state中取值
        count:state.sum,
        renshu:state.persons.length,
    }), //函数形式
    // mapDispatchToProps的一般写法，函数形式
    // dispatch=>({
    //     increment:number=>dispatch(createIncrementAction(number)),
    //     decrement:number=>dispatch(createDecrementAction(number)),
    //     incrementAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time)),
    // }),

    // mapDispatchToProps的精简写法,写成对象的形式
    // 里面的奥妙在于react-redux会自动的帮咱们dispatch分发
    {
        increment:createIncrementAction,// 程序员只准备到action，然后react-redux会自动dispatch
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction,
    }

)(Count)