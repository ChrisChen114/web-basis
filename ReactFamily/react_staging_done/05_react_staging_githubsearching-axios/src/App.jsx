//引入react组件
import React, { Component } from 'react'
import Search from './components/Search/Search'
import List from './components/List/List'

export default class App extends Component {
  // 记住：状态在哪，处理状态的函数就在哪
  //初始化状态，users初始值为数据
  state = {
    users:[], //users初始值为数据
    isFirst:true, //是否为第一次打开页面
    isLoading:false, //标识是否处于加载中
    err:'', //存储请求相关的错误信息
  }
  // 更新App的state
  updateAppState = (stateObj)=>{
    // 注意下面两种写法
    // this.setState({...stateObj});
    this.setState(stateObj);
  }

  render() {
    return (
      <div className="container">
        {/* 父给子传一个函数 */}
        <Search updateAppState={this.updateAppState}/>
        {/* ...批量传递，难不成有10个传10个？ */}
        <List {...this.state}/>
      </div>
    )
  }
}
