//引入react组件
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  // 赋值语句+箭头函数
  getStudentData = ()=>{
    // get是先发请求，然后干嘛使用then
    // 用到了..\react全家桶资料\06_其他\测试代理服务器\测试代理服务器\server1.js
    // cross-origin resource sharing (CORS) request ，说的是跨域请求的问题
    // 从port 3000往port 5000发，就存在CORS，如何解决呢？？通过代理解决
    // 把5000改成3000，就是站在原3000端口发，然后通过代理转到5000上
    // 如果改成axios.get('http://localhost:3000/index.html')，
    // 将访问该文件夹下的index.html，因为文件存在，不存在的话就跨域访问.
    axios.get('http://localhost:3000/api1/students').then(
      // 成功，而且数据放在了data了
      response=>{console.log('成功了',response.data);},
      // 失败
      error=>{console.log('失败了',error);},
    )
  }

  //获取汽车数据
  getCarData = ()=>{
    axios.get('http://localhost:3000/api2/cars').then(
      // 成功，而且数据放在了data了
      response=>{console.log('成功了',response.data);},
      // 失败
      error=>{console.log('失败了',error);},
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    )
  }
}
