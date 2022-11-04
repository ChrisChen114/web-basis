import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './List.css'

export default class List extends Component {
    // 记住：状态在哪，处理状态的函数就在哪
    //初始化状态，users初始值为数据
    state = {
        users:[], //users初始值为数据
        isFirst:true, //是否为第一次打开页面
        isLoading:false, //标识是否处于加载中
        err:'', //存储请求相关的错误信息
    }

    // 用这个钩子
    // 在List里面订阅消息，然后在Search里面将搜索结果发布（返回）给List
    componentDidMount(){
        // PubSub.subscribe('atguigu',(msg,data)=>{
        // 默认写msg，但是不想写的话，可以用'_'占个位
        this.token = PubSub.subscribe('atguigu',(_,stateObj)=>{
            // console.log('List组件收到数据了，',data)
            this.setState(stateObj);
        })
    }

    //卸载钩子
    componentWillUnmount(){
        PubSub.unSubscribe(this.token);
    }

    render() {
        const {users,isFirst,isLoading,err} = this.state

        // 
        return (
            // div等里面不能写if等条件语句，但是可以写条件表达式
            // 学习下面的写法，三元表达式
            <div className="row">
                {
                    isFirst ? <h2>Enter name to search</h2> :
                    isLoading ? <h2>Loading...</h2> :
                    err ? <h2 style={{color:'red'}}>{err}</h2> :
                    // id,html_url,avatar_url,login都是通过查看返回的数据分析出来的
                    users.map((userObj)=>{
                        return(
                            <div key={userObj.id} className="card">
                                <a rel='noreferrer' href={userObj.html_url} target="_blank">
                                    <img alt='head_portrait' src={userObj.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
