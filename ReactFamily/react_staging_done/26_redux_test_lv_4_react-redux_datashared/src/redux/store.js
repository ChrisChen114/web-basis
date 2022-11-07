/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
// 引入为Person组件服务的reducer
import personReducer from './reducers/person'

// 汇总所有的reducer变为一个总的reducer；// allReducer-总状态对象
const allReducer = combineReducers({
	sum:countReducer,
	persons:personReducer,
})
//暴露store
export default createStore(
	allReducer,
	applyMiddleware(thunk)
	)
// 这是一个
// export default createStore(personReducer,applyMiddleware(thunk))