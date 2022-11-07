/**
 * 该文件专门为Count组件生成action对象
 */
 import {INCREMENT,DECREMENT} from './constant'

// 加法
export const createIncrementAction = data=>({type:INCREMENT,data} )
// 减法
export const createDecrementAction = data=>({type:DECREMENT,data} )

