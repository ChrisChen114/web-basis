// 该文件用于汇总所有的reducers为一个总的reducer

// 引入combineReducers，用于汇总多个reducer
import {combineReducers} from 'redux'
// 引入为Count组件服务的reducer
import count from './count'
// 引入为Person组件服务的reducer
import persons from './person'

// 汇总所有的reducer变为一个总的reducer；// allReducer-总状态对象
export default combineReducers({
    // 如果key-value名字一样，触发简写形式
	count,
	persons
})
