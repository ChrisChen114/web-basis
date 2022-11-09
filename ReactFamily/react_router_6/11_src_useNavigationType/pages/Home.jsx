// 函数里面用useState实现状态更新
import React, { useState } from 'react'
import {NavLink,Outlet} from 'react-router-dom'

// Navigate只要渲染就会引起视图的切换

export default function Home() {
    return (
        <div>
            <h2>Home组件内容</h2>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        {/* 如果news带了/news，就是跟 */}
                        {/* 如果news带了'./news' (等价于'news')，就是不破坏当前路径的前提下继续找 */}
                        {/* 默认是push，因为什么都没写,News页面里useNavigationType()输出PUSH */}
                        {/* 写了replace，News页面里useNavigationType()输出REPLACE */}
                        {/* 基于第1步或第2步的页面，点击刷新,News页面里useNavigationType()输出POP*/}
                        <NavLink className="list-group-item" to="news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className="list-group-item" to="message">Message</NavLink>
                    </li>
                </ul>
                {/* 指定路由组件呈现的位置 */}
                <Outlet/>
            </div>
        </div>
    )
}
