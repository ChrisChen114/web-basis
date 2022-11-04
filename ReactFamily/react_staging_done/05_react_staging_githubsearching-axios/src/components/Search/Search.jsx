import React, { Component } from 'react'
import axios from 'axios';

export default class Search extends Component {
  //搜索
  HandleSearch = ()=>{
    // 获取用户的输入（连续结构赋值+重命名）
    //结构赋值，如下
    //const {keyWordElement}=this;
    // 连续结构赋值呢，如下，keyWordElement在提取赋值给value等
    // keyWordElement这个人没有定义，只是临时用，提取赋值给value等
    const {keyWordElement:{value:keyWord}} = this;
    //这种写法只能获取一个结构赋值的值，如下
    // const {value}=this.keyWordElement.value;
    // 如果不喜欢value这个名字，可以改名字-重命名，写法如下
    // const {keyWordElement:{value:data}}=this;

    // 发送请求前通知App更新状态
    this.props.updateAppState({isFirst:false,isLoading:true});
    // 
    // console.log(`/api1/search/users?q=${keyWord}`);


    // 发送网络请求-get请求
    // 模板字符串
    // github已解决cors跨域问题
    // axios.get(`https://api.github.com/search/users?q=atguigu`).then(
    // 可以把http://localhost:3000删掉，因为站在自己的位置（网络上）
    // 二逼自己，需要再认真对待代码
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      // 发送网络请求
      response => {
        // 请求成功后通知App更新状态
        this.props.updateAppState({isLoading:false,users:response.data.items})
      },
      // 请求失败后通知App更新状态
      error => {
        // 这里有一个雷：err那里不要存错误对象，要存错误对象身上的一个属性
        this.props.updateAppState({isLoading:false,err:error.message})
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
          {/* <h3 className="jumbotron-heading">Search Github Users</h3> */}
          <h3 className="jumbotron-heading">搜过Github用户</h3>
          <div>
              {/* <input type="text" placeholder="enter the name you search"/>&nbsp;<button>Search</button> */}
              {/* ref就是类似id，this.keyWordElement指向input，然后获取value值 */}
              <input ref={c=>this.keyWordElement=c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
              <button onClick={this.HandleSearch}>搜索</button>
          </div>
        </section>
    )
  }
}
