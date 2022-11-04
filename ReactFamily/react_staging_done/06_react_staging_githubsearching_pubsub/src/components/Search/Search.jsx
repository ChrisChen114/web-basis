import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios';

export default class Search extends Component {
  //搜索
  HandleSearch = ()=>{
    // console.log('Search组件发布消息了');
    // 在List里面订阅消息，然后在Search里面将搜索结果发布（返回）给List
    

    // 获取用户的输入（连续结构赋值+重命名）
    const {keyWordElement:{value:keyWord}} = this;

    // 发送请求前通知List更新状态
    // this.props.updateAppState({isFirst:false,isLoading:true});
    PubSub.publish('atguigu',{isFirst:false,isLoading:true})

    // 发送网络请求-get请求
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      // 发送网络请求
      response => {
        // 请求成功后通知List更新状态
        //this.props.updateAppState({isLoading:false,users:response.data.items})
        PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
      },
      // 请求失败后通知List更新状态
      error => {
        //this.props.updateAppState({isLoading:false,err:error.message})
        PubSub.publish('atguigu',{isLoading:false,err:error.message})
      }
    )
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
