import React from 'react'
import { useParams,useMatch } from 'react-router-dom'

export default function Detail() {
    const { id,title,content} = useParams();
    // useMatch用的不多
    //  const x=useMatch('/home/message/detail/:id/:title/:content');
    //  x.params就能得到一个对象：{id: '004', title: '消息4', content: '粒粒皆辛苦'}
    //  console.log(x.params)
    
    return (
        // 1. RRD5中 props接收参数有3中：history，location，match
        // 2. RRD6中，函数式组件中一种是用useParams
        //          还有一种是使用useMatch
        <ul>
            <li>消息编号:{id}</li>
            <li>消息抬头:{title}</li>
            <li>消息内容:{content}</li>
        </ul>
    )
}
