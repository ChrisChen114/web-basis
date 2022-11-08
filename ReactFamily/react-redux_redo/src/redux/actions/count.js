/*
    该文件专门为Count组件生成action对象，包含increment、decrement、incrementAsync
 */

import {INCREMENT,DECREMENT,INCREMENTASYNC} from '../constant.js'

// ××××××××××××××××××××××××××××
// 以下是错误写法
// Cannot read properties of undefined (reading 'state')
// 还是作用域的问题，普通函数无法获取上下文的变量
// export function increment(data){
//     this.state.dispatch({type:INCREMENT,data})
// }
// 写成箭头函数的形式
// 箭头右侧只有一句函数体，还想默认返回一个对象，写成小括号(),把花括号{}丢里面去。
// 箭头左侧只有一个参数，小括号()省略了，
export const increment = data=>({type:INCREMENT,data})

export const decrement = data=>({type:DECREMENT,data})

// 异步操作要放在这里
export const incrementAsync = (data,time)=>{
     return (dispatch)=>{
        setTimeout(()=>{
            dispatch(increment(data))
        },time)
     }
}