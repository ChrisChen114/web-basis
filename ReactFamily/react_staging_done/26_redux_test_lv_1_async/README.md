## 3.求和案例_redux异步action版
        (1) 明确：延迟的动作不想交给组件自身，想交给action
        (2) 何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回（非必须）.
        (3) 具体编码：
                1）yarn add redux-thunk,并配置在store中
                        export default createStore(countReducer,applyMiddleware(thunk))
                2) 创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务
                3) 异步任务有结果后，分发一个同步的action去真正操作数据
        (4) 备注：异步action不是必须要写的，完全可以自己等待异步任务的结果，再去分发同步action

### 异步action讲解

        action：1. Object{} 同步action
                2. function 异步action
### 增加中间件 middleware ==> react-thunk
        ```
        yarn add redux-thunk
        ```
        在store.js中，
                import {createStore,applyMiddleware} from 'redux'
                import thunk from 'redux-thunk'
                //暴露store
                export default createStore(countReducer,applyMiddleware(thunk))