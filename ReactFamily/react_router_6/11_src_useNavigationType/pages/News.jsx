import React from 'react'
import { useNavigationType } from 'react-router-dom'

export default function News() {
    // 1. 作用：返回当前的导航类型（用户是如何来到当前页面的）。
    // 2. 返回值：`POP`、`PUSH`、`REPLACE`。
    // 3. 备注：`POP`是指在浏览器中直接打开了这个路由组件（刷新页面）。
    console.log('useNavigationType-', useNavigationType())
    return (
        <ul>
            <li>news001</li>
            <li>news002</li>
            <li>news003</li>
        </ul>
    )
}
