/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware} from 'redux'
// 引入redux-thunk，提供了createAsyncThunk方法，可以支持异步.
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入汇总之后的allReducer
import reducer from './reducers/index'



// 暴露store，在src/index.js中通过<Provider store={store}>包裹App，
// 目的是让App所有的后代容器组件都能接收到store
// 修改这里，以引入redux-devtools-extension
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
// 这是一个
// export default createStore(personReducer,applyMiddleware(thunk))