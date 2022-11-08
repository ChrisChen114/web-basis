import { ADD_PERSON } from "../constant";

// 这块写错了
export const addPerson = (personObj)=>({
    type:ADD_PERSON,data:personObj
})
