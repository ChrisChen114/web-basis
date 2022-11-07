### react-redux开发者工具的使用
（1）yarn add redux-devtools-extension
（2）store中进行配置
        // 引入redux-devtools-extension
        import {composeWithDevTools} from 'redux-devtools-extension'
        // 修改这里，以引入redux-devtools-extension
        export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
