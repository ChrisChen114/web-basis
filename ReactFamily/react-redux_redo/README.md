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

### Redux api全整理
http://t.zoukankan.com/zjhblogs-p-13533143.html

## redux
        描述
        Redux 是JavaScript的一个可预言的状态管理器

        三个原则
        单一数据源
        状态只读
        更新必须由纯函数完成（不能直接修改状态）
        Redux Top-Level Api
        createStore()
        创建一个 Redux store 用来存储所有的state 应用中应有且只有一个store

        combineReducers()
        合并多个不同reducer 函数作为value的对象，合并为最终的reducer函数

        applyMiddleware()
        使用包含自定义功能的middleware 来拓展Redux

## react-redux
        描述
        react-redux 是react 捆绑redux 的官方包。

        它允许 React 组件从 Redux 存储读取数据，并dispatch(action)到存储以更新数据

        react-redux Api
        connect()核心功能
        connect将react组件与redux状态存储器连接起来

        provider() 核心
        使用connect() 必须先使用provider 包裹（需要connect）组件。

        一般在app的顶层使用，这样整个应用的组件都在其中

        HooksReact^16.8
        React 16.8+ 的新hooksApi 给予了数组件使用local状态的能力，以此为基础，我们不需要在写class组件，来使用redux-state！（可以不使用connect）

        useSelector()
        在函数组件中获取store的当前状态

        useDispatch()
        在函数组件中获取 dispatch 函数的引用

## redux-toolkit
        描述
        redux的开发工具包，为了解决Redux 的三个常见问题

        简化Redux store配置
        Redux 需要很多包才能提供更强大的功能
        Redux 需要太多的样板代码
        redux toolkit Apis
        configureStore()
        重新封装了redux的createStore()

        createReducer()
        用于代替redux reducer方法，简化操作类型（以前需要写switch case）.并且引入了immer库，使得在reducer中可以直接修改state值，不需要返回新对象state.todos[3].completed = true

        createAction()
        一个action 生成器，可以自动创建action方法，无需使用样式模板。

        createSlice() 核心功能
        详细请参考：createSlice 文档

        接收一个对象，包括reducer函数，切片名，初始化状态。并自动生成 Action creators和Action type

        createAsyncThunk()
        接收一个 action type 和一个返回promise的函数，实现异步操作

        createSelector() 类似computed
        生成一组可重用的简化器和选择器，以管理存储中的规范化数据