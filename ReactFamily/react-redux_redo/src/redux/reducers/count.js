/*
    1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import {INCREMENT,DECREMENT} from '../constant'

const initState = 0;
// ××××××××××××××××××××××××××××
// 里面写成一个函数，而不是箭头函数
export default function countReducer(preState = initState,action){
    const {data,type} = action;
    switch (type){
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        // 这里没有 INCREMENTASYNC的case判断  (之前写错了)
        default: 
            return preState;
    }
}
