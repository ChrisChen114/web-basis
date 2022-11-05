import React, { Component } from 'react'
import {useParams,useLocation} from 'react-router-dom'
import qs from 'qs'

const DetailData = [
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，尚硅谷'},
    {id:'03',content:'你好，小明'},
]

export const Detail = ()=> {
    
    // S3, 接收params参数方式
    // 使用useParams来接收即可。
    // const params = useParams();
    // 找到的是消息详情对象，需要再获取它的content
    // const findResult = DetailData.find((detailObj)=>{
    //     return detailObj.id === params.id;
    // });

    // return (
    //     <ul>
    //         <li>ID:{params.id}</li>
    //         <li>TITLE:{params.title}</li>
    //         {/* 这个需要在DetailData根据id查 */}
    //         <li>CONTENT:{findResult.content}</li>
    //     </ul>
    // );


    // S3, 接收search参数方式
    // const {search} = useLocation();
    // // 解构赋值
    // const {id,title} = qs.parse(search.slice(1));
    // 补充知识：
    // qs.stringify,将对象{name:'tom',age:18}转为urlencoded编码的字符串，urlencoded字符串如key=value&key=value1
    // qs.parse,将urlencoded编码的字符串转为对象
    // slice(1),截取1，会将问号干掉

    // // 找到的是消息详情对象，需要再获取它的content
    // const findResult = DetailData.find((detailObj)=>{
    //     return detailObj.id === id;
    // });

    // return (
    //     <ul>
    //         <li>ID:{id}</li>
    //         <li>TITLE:{title}</li>
    //         {/* 这个需要在DetailData根据id查 */}
    //         <li>CONTENT:{findResult.content}</li>
    //     </ul>
    // );


    // S3, 接收state参数方式
    // 解构赋值-一步到位
    // const {id,title} = state;//省略这一步
    const {state:{id,title}} = useLocation();

    // 找到的是消息详情对象，需要再获取它的content
    const findResult = DetailData.find((detailObj)=>{
        return detailObj.id === id;
    });

    return (
        <ul>
            <li>ID:{id}</li>
            <li>TITLE:{title}</li>
            {/* 这个需要在DetailData根据id查 */}
            <li>CONTENT:{findResult.content}</li>
        </ul>
    );
}

