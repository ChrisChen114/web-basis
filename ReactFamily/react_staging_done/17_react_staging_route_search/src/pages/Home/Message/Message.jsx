import React, { Component } from 'react'
import {Link,Route,Routes} from 'react-router-dom'
import {Detail} from './Detail/Detail';

export default class Message extends Component {
  state = {
    messageArr:[
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'},
    ]
  }
  render() {
    const {messageArr} = this.state;
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj)=>{
              return(
                <li key={msgObj.id}>
                  {/* S1, 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                  {/* S1, 向路由组件传递search参数 */}
                  <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 注册路由  */}
        <Routes>
          {/* S2, 声明接收params参数 */}
          {/* <Route path="detail/:id/:title" element={<Detail/>}/> */}

          {/* S2, search参数无需声明接收，正常注册路由即可 */}
          <Route path="detail" element={<Detail/>}/>
        </Routes>
      </div>
    )
  }
}
