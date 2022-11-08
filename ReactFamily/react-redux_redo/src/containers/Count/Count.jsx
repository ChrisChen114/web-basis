import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Count extends Component {
    increment=()=>{
        console.log(this.selectNumber.value)
    }

    render() {
        return (
            <div>
            <h2>我是Count组件,当前Person组件总人数为??</h2>
            <h4>当前求和为:0</h4>
            <select ref={c=>this.selectNumber=c}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button >-</button>&nbsp;
            <button >当前求和为奇数再加</button>&nbsp;
            <button >异步加</button>
            </div>
        )
    }
}

// connect(mapStateToProps,mapActionToProps)(UI组件)
export default connect(
    state=>{

    },
    {
        
    }
)(Count)
