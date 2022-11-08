/**
    错误边界
        -只适用于生产环境，开发环境只能用那么一下

    回顾：12_组件的生命周期/react生命周期（新）.html
 */

import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state={
        hasError:''// 用于标识子组件是否产生错误
    }

    // 当Parent的子组件出现报错时候，会触发getDerivedStateFromError调用，
    // 并携带错误信息
    // 这是一个钩子
  static getDerivedStateFromError(error){
    console.log(error);
    return {hasError:error}
  }

//   属于生命周期钩子里的一个，不常见
  componentDidCatch(){
    console.log('统计错误,反馈给服务器,用于通知开发人员进行bug额解决')
  }

  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        {this.state.hasError? <h2>当前网络不稳定，稍后再试</h2>:<Child/>}
      </div>
    )
  }
}
