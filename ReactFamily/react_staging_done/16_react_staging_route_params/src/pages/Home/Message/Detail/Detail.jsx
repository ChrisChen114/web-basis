import React, { Component } from 'react'
import {useParams} from 'react-router-dom'

const DetailData = [
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，尚硅谷'},
    {id:'03',content:'你好，小明'},
]

export const Detail = ()=> {
    // 使用useParams来接收即可。
    // S3, 接收参数方式
    const params = useParams();
    // 找到的是消息详情对象，需要再获取它的content
    const findResult = DetailData.find((detailObj)=>{
        return detailObj.id === params.id;
    });
    return (
        <ul>
            <li>ID:{params.id}</li>
            <li>TITLE:{params.title}</li>
            {/* 这个需要在DetailData根据id查 */}
            <li>CONTENT:{findResult.content}</li>
        </ul>
    );
}

