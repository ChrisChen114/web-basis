import React, { Component } from 'react'
import './List.css'

export default class List extends Component {
  render() {
    const {users,isFirst,isLoading,err} = this.props

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
