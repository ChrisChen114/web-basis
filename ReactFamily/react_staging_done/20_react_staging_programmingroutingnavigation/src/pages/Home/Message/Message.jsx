import React, { Component } from 'react'
import {Link,Route,Routes,useParams,useNavigate} from 'react-router-dom'
import {Detail} from './Detail/Detail';

const state = {
  messageArr:[
    {id:'01',title:'消息1'},
    {id:'02',title:'消息2'},
    {id:'03',title:'消息3'},
  ]
}

const Message =()=> {

  const {messageArr} = state;
  const navigate = useNavigate();

  // push跳转，以params参数为例，navigate默认开启push模式
  const pushShow = (id,title)=>{
    // 编写一段代码，让其实现跳转到Detail组件，且为push跳转
    // navigate(`/home/message/detail/${id}/${title}`);

    // S1
    // push跳转+携带query(search)参数
    // navigate(`/home/message/detail?id=${id}&title=${title}`);

    // push跳转+携带state参数
    // 注意这里要显示地加上replace:false
    navigate(`/home/message/detail`,{state:{id,title},replace:false});
  }

  // replace跳转，以params参数为例，开启replace:true
  const replaceShow = (id,title)=>{
    // 编写一段代码，让其实现跳转到Detail组件，且为replace跳转
    // navigate(`/home/message/detail/${id}/${title}`,{replace:true});

    // replace跳转+携带query(search)参数
    // navigate(`/home/message/detail?id=${id}&title=${title}`,{replace:true});

    // replace跳转+携带state参数
    navigate(`/home/message/detail`,{state:{id,title},replace:true});
  }

  // 回退
  const back = ()=>{
    navigate(-1)
  }

  // 前进
  const forward = ()=>{
    navigate(1)
  }

  // go
  // 正数向前进n步，负数向后退n步
  const go = ()=>{
    navigate(2)
  }

  // render() {
    
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
                  {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                  {/* S1, 向路由组件传递state参数 */}
                  {/* 此处的state与组件中的state没有任何关系. */}
                  {/* 这里要求写一个对象， state={}这样还不是对象，这只是js表达式；对象需要这样写-to={{}} */}
                  <Link replace to='/home/message/detail' state={{id:msgObj.id,title:msgObj.title}}>{msgObj.title}</Link>&nbsp;&nbsp;

                  &nbsp;<button onClick={()=>{pushShow(msgObj.id,msgObj.title)}}>push查看</button>
                  &nbsp;<button onClick={()=>{replaceShow(msgObj.id,msgObj.title)}}>replace查看</button>

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
          {/* <Route path="detail" element={<Detail/>}/> */}

          {/* S2, state参数无需声明接收，正常注册路由即可 */}
          <Route path="detail" element={<Detail/>}/>
        </Routes>

        {/* 增加‘前进’和‘回退’按钮 */}
        <button onClick={back}>回退</button>&nbsp;
        <button onClick={forward}>前进</button>&nbsp;
        <button onClick={go}>go</button>&nbsp;

      </div>
    )
  // }
}

export default Message;
