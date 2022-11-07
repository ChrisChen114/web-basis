### react-redux开发者工具的使用
（1）yarn add redux-devtools-extension
（2）store中进行配置
        // 引入redux-devtools-extension
        import {composeWithDevTools} from 'redux-devtools-extension'
        // 修改这里，以引入redux-devtools-extension
        export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))


### react-redux求和案例最终版
        （1）所有变量名字要规范，尽量触发对象的简写形式
        （2）reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer
        
