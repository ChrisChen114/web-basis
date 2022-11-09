// 函数里面用useState实现状态更新
import React, { useState } from 'react'
import { NavLink, Outlet, useOutlet } from 'react-router-dom'

// Navigate只要渲染就会引起视图的切换

export default function Home() {
    console.log('useOutlet--', useOutlet())
    // 如果嵌套路由没有挂载,则result为null -->>初次点击Home，输出null，当点击News或Message就输出值了
    // 如果嵌套路由已经挂载,则展示嵌套的路由对象

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
                        <NavLink className="list-group-item" replace to="news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className="list-group-item" to="message">Message</NavLink>
                    </li>
                </ul>
                {/* 指定路由组件呈现的位置 */}
                <Outlet />
            </div>
        </div>
    )
}
