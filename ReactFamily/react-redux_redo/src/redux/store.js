/*
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */
// createStore曾引入错误，一定是从redux中import
// 引入createStore，专门用于创建redux中最为核心的store对象
// 引入使用包含自定义功能的middleware 来拓展Redux
import {createStore,applyMiddleware} from 'redux'
// 引入用于redux异步编程
import thunk from 'redux-thunk'
// 引入用作redux调试
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入汇总之后的allReducer
import reducer from './reducers/index'

export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))