/*
    组件优化
    Component的2个问题 
    1. 只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低
    2. 只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低

    项目中一般使用PureComponent来优化
*/
// import React, { Component } from 'react'
import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
    state = {carName:'奔驰c63'}
    changeCar = ()=>{
        this.setState({carName:'迈巴赫'})//这种会创建一个新的变量
        // this.setState({})

        // PureComponent有点瑕疵，下面的写法会不出效果，
        // 因为返回的地址是同一个，PureComponent认为没变化
        // const obj = this.state
        // obj.carName = '迈巴赫'
        // this.setState(obj)
    }

    // 写上生命周期钩子
    // shouldComponentUpdate(nextProps,nextState){
    //     // console.log(nextProps,nextState);// 接下来要变化的目标props和state
    //     // console.log(this.props,this.state);//目前的props和state
    //     return !this.state.carName === nextState.carName;
    //     // if(this.state.carName === nextState.carName){
    //     //     return false;
    //     // }else return true
    // } 

    render() {
        console.log('parent--render')
        const {carName} = this.state
        return (
            <div className='parent'>
            <h3>我是Parent组件</h3>
            <span>我的车名字是:{carName}</span><br/>
            <button onClick={this.changeCar}>点我换车</button>
            <Child carName='奥拓'/>
            {/* <Child/> */}
            </div>
        )
    }
}

class Child extends PureComponent {
    // 写上生命周期钩子
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps,nextState);// 接下来要变化的目标props和state
    //     console.log(this.props,this.state);//目前的props和state
    //     // if(this.props.carName === nextProps.carName) return false
    //     // else return true
    //     return !this.props.carName === nextProps.carName
    // } 

    render() {
        console.log('Child--render')
      return (
        <div className='child'>
          <h3>我是Child组件</h3>
          <span>我接到的车是:{this.props.carName}</span>
        </div>
      )
    }
  }