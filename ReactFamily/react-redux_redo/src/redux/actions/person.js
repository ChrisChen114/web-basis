import { ADD_PERSON } from "../constant";

// 这块写错了，以下是正确写法
// 箭头右侧只有一句函数体，还想默认返回一个对象，写成小括号(),把花括号{}丢里面去。
// 箭头左侧只有一个参数，小括号()省略了，
export const addPerson = (personObj)=>({
    type:ADD_PERSON,data:personObj
})
