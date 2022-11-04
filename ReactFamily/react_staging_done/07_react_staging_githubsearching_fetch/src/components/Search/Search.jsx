import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios';

export default class Search extends Component {
  //搜索
  HandleSearch = async ()=>{
    // console.log('Search组件发布消息了');
    // 在List里面订阅消息，然后在Search里面将搜索结果发布（返回）给List
    

    // 获取用户的输入（连续结构赋值+重命名）
    const {keyWordElement:{value:keyWord}} = this;

    // 发送请求前通知List更新状态
    PubSub.publish('atguigu',{isFirst:false,isLoading:true})

    // 发送网络请求-使用axios发送
    // axios.get(`/api1/search/users2?q=${keyWord}`).then(
    //   // 发送网络请求
    //   response => {
    //     // 请求成功后通知List更新状态
    //     PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
    //   },
    //   // 请求失败后通知List更新状态
    //   error => {
    //     PubSub.publish('atguigu',{isLoading:false,err:error.message})
    //   }
    // )

    // 发送网络请求--使用fetch发送
    // 链式调用,Promise实例可以这样用
    // 下面代码未优化版本
    // fetch(`/api1/search/users2?q=${keyWord}`).then(
    //   response => {
    //     console.log('联系服务器成功了--');
    //     return response.json();
    //   },
    //   error => {
    //     console.log('联系服务器失败了--',error);
    //     return new Promise();
    //   },
    // ).then(
    //   response => {console.log('获取数据成功',response);},
    //   error => {console.log('获取数据失败',error);},
    // )

    // 下面代码做了优化
    // fetch(`/api1/search/users2?q=${keyWord}`).then(
    //   response => {
    //     console.log('联系服务器成功了--');
    //     return response.json();
    //   },
    // ).then(
    //   response => {console.log('获取数据成功',response);},
    // ).catch(
    //   // 在这里统一处理错误
    //   (error)=>{
    //     console.log('获取数据失败',error);
    //   }
    // )

    // 还能进一步优化
    // 注意：await右侧一定是Promise实例
    // await想用就用？需要在最近的函数入口地方，=号的右侧加入async，见handleSearch那里
    // await配合async使用
    // await只能等到成功的结果
    try {
      const response = await fetch(`/api1/search/users2?q=${keyWord}`);
      const data = await response.json();
      PubSub.publish('atguigu',{isLoading:false,users:data.items})
    } catch (error) {
      PubSub.publish('atguigu',{isLoading:false,err:error.message})
    }


  }

  render() {
    return (
      <section className="jumbotron">
          <h3 className="jumbotron-heading">搜过Github用户</h3>
          <div>
              <input ref={c=>this.keyWordElement=c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
              <button onClick={this.HandleSearch}>搜索</button>
          </div>
        </section>
    )
  }
}
