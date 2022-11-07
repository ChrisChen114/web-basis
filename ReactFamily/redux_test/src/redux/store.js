// 该文件专门用于暴露一个store对象，整个应用只有一个store对象

// 引入createStore，专门用于创建redux中最为核心的store对象
import {configureStore} from '@reduxjs/toolkit'
// 引入为count组件服务的reducer
import countReducer from './count_reducer.js'

// 暴露store
export default configureStore({
    reducer:{
        counter:countReducer
    }
})
