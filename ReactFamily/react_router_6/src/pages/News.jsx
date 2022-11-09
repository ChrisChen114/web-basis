import React from 'react'
import { useNavigationType,useResolvedPath } from 'react-router-dom'

export default function News() {
    // 1. 作用：返回当前的导航类型（用户是如何来到当前页面的）。
    // 2. 返回值：`POP`、`PUSH`、`REPLACE`。
    // 3. 备注：`POP`是指在浏览器中直接打开了这个路由组件（刷新页面）。
    console.log('useNavigationType-', useNavigationType())

    // 作用：给定一个 URL值，解析其中的：path、search、hash值
    // 输出：{pathname: '/home/news/D:/BaiduNetdiskDownload/React/react全家桶资料/01_课件', search: '?id=001&name=tom', hash: '#qwe'}
    console.log('useResolvedPath--',useResolvedPath('D:/BaiduNetdiskDownload/React/react全家桶资料/01_课件?id=001&name=tom#qwe'))
    return (
        <ul>
            <li>news001</li>
            <li>news002</li>
            <li>news003</li>
        </ul>
    )
}
