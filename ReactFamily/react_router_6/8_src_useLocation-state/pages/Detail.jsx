import React from 'react'
// import {useSearchParams,useLocation} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Detail() {
    // 使用useSearchParams，实现路由参数的传递
    // const [search,setSearch] = useSearchParams();
    // const id = search.get('id')
    // const title = search.get('title')
    // const content = search.get('content')

    // useLocation实现路由中state参数的传递
    // 连续解构赋值
    const {state:{id,title,content}} = useLocation();
    // console.log('--',x.state)
    return (
        <ul>
            {/* <li> */}
                {/* setSearch的使用 */}
                {/* 里面直接给一个回调，当然其他也行 */}
                {/* <button onClick={()=>setSearch('id=008&title=更改&content=西西')}>点我更新一下收到的search参数</button> */}
                {/* <button onClick={()=>setSearch('id=008&title=更改&content=西西')}>点我更新一下收到的search参数</button> */}
            {/* </li> */}
            <li>消息编号:{id}</li>
            <li>消息抬头:{title}</li>
            <li>消息内容:{content}</li>
        </ul>
    )
}
