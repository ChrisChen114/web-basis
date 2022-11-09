import React, { useState } from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom'

export default function Message() {
    const [messages] = useState([
        { id: '001', title: '消息1', content: '锄禾日当午' },
        { id: '002', title: '消息2', content: '汗滴禾下土' },
        { id: '003', title: '消息3', content: '谁知盘中餐' },
        { id: '004', title: '消息4', content: '粒粒皆辛苦' },
    ])

    const navigate = useNavigate();
    // 查看详情
    // 下面这种就是编程式路由导航
    // Programmatic routing navigation
    function showDetail(msgObj){
        // useNavigate是一个hook，就是一个函数
        navigate('detail',{
            replace:false,// 写这个的目的是说明此处可以写这个参数
            // 注意这里只能写state参数，不能写params和search参数
            state:{
                id:msgObj.id,
                title:msgObj.title,
                content:msgObj.content,
            }
        })
    }

    return (
        <div>
            <ul>
                {
                    messages.map((msg) => {
                        return (
                            // 路由链接
                            // 路由传递参数有3中，params，search，location.state
                            <li key={msg.id}>
                                {/* 1. params参数 */}
                                {/* <Link to={`detail/${msg.id}/${msg.title}/${msg.content}`}>{msg.title}</Link>&nbsp;&nbsp; */}

                                {/* 2. search参数不需要占位,直接在后面写 */}
                                {/* <Link to={`detail?id=${msg.id}&title=${msg.title}&content=${msg.content}`}>{msg.title}</Link>&nbsp;&nbsp; */}

                                {/* 3. state参数不需要占位,直接写state属性 */}
                                <Link
                                    to='detail'
                                    state={{
                                        id:msg.id,
                                        title:msg.title,
                                        content:msg.content,
                                    }}
                                >{msg.title}</Link>&nbsp;&nbsp;
                                <button onClick={()=>showDetail(msg)}>查看详情</button>
                            </li>
                        )
                    })
                }

            </ul>
            <hr />
            {/* 指定路由组件的展示位置 */}
            <Outlet />
        </div>
    )
}
