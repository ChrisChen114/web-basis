import { createSlice } from "@reduxjs/toolkit"

export const count_reducer = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
      // 并不是真正的改变状态值，因为它使用了 Immer 库
      // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
      // 不可变的状态
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement, incrementByAmount } = count_reducer.actions
export default count_reducer.reducer




/*
    1. 该文件是用于创建一个为count组件服务的reducer，reducer的本质就是一个函数
    2. reducer函数会接到两个参数，分别为：之前的状态（preState），动作对象（action）
*/ 

// const initState = 0;
// // 含初始值的写法
// export default function countReducer(preState=initState,action){
//     // if(preState === undefined){
//         // preState = 0;// 更为通用的做法是const initState = 0;和preState=initState
//     // }
//     // 从action对象中获取：type、data
//     const {type,data} = action;
//     // 根据type决定如何加工数据
//     switch (type){
//         case 'increment': // 如果是加
//             return preState + data;
//         case 'decrement': // 如果是减
//             return preState - data;
//         // 注意：这里不能写奇数再加，异步加等那些
//         // reducer只管操作，是纯函数，不管那些无聊的事
//         default:
//             // 初始化操作
//             return preState;
//     }

// }