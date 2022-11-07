import { ADD_PERSON } from "../constant";

// reducer要求的是纯函数
// 初始化人的列表
const initState = [{id:'001',name:'tom',age:18}]
export default function personReducer(preState=initState,action){
    const {type,data} = action
    switch (type){
        case ADD_PERSON: // 若是添加一个人
            // 这种写法理论上可行，实际上redux做了一层判断，
            // 如果返回的名字和preState一样（地址一样），则不进行处理，
            // 此处不可以这样写，这样会导致preState被改写了，
            // personReducer就不是纯函数了。
            // preState.unshift(data)
            // return preState;

            // 一般是返回一个新的数组等
            return [data,...preState];
        default:
            return preState;
    }
}