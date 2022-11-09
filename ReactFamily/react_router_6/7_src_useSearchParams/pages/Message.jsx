import React, { useState } from 'react'
import {Link,Outlet} from 'react-router-dom'

export default function Message() {
    const [messages] = useState([
        { id: '001', title: '消息1', content: '锄禾日当午' },
        { id: '002', title: '消息2', content: '汗滴禾下土' },
        { id: '003', title: '消息3', content: '谁知盘中餐' },
        { id: '004', title: '消息4', content: '粒粒皆辛苦' },
    ])

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
                                <Link to={`detail?id=${msg.id}&title=${msg.title}&content=${msg.content}`}>{msg.title}</Link>&nbsp;&nbsp;
                            </li>
                        )
                    })
                }

            </ul>
            <hr/>
            {/* 指定路由组件的展示位置 */}
            <Outlet/>
        </div>
    )
}
