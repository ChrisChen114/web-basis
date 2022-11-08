### 针对react-redux有关的引入
D:.
│   ....public folder and other files
│       
└───src
    │   App.js -- 引入Count组件和Person组件
    │   index.js -- import {Provider}，包裹App，让App所有后代容器组件都能接收到store
    │   
    ├───containers -- 容器组件文件夹
    │   ├───Count
    │   │       Count.jsx -- 
    │   │       
    │   └───Person
    │           Person.jsx
    │           
    └───redux -- redux文件夹
        │   constant.js -- 保存常量信息，提供给reducers和actions使用
        │   store.js -- 该文件专门用于暴露一个store对象，整个应用只有一个store对象
        |               // 引入createStore，专门用于创建redux中最为核心的store对象
        |               // 引入使用包含自定义功能的middleware 来拓展Redux
        |               import {createStore,applyMiddleware} from 'redux'
        |               // 引入redux-thunk，提供了createAsyncThunk方法，可以支持异步.
        |               import thunk from 'redux-thunk'
        |               // 引入redux-devtools-extension
        |               import {composeWithDevTools} from 'redux-devtools-extension'
        |               // 引入汇总之后的allReducer
        |               import reducer from './reducers/index'
        │   
        ├───actions -- 提供给containers使用
        │       count.js -- 该文件专门为Count组件生成action对象，
        |                       包含increment、decrement、incrementAsync
        │       person.js -- 创建增加一个人的action动作对象,含addPerson
        │       
        └───reducers -- 提供给store.js使用
                count.js -- 1.该文件是用于创建一个为Count组件服务的reducer，
                                reducer的本质就是一个函数
	                        2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
                index.js -- 引入combineReducers，用于汇总多个reducer
                            import {combineReducers} from 'redux'
                person.js -- 用于创建一个为Person组件服务的reducer
                

### react-redux中使用的api有：
    --connect()核心功能，connect将react组件与redux状态存储器连接起来
    --provider() 核心，使用connect() 必须先使用provider 包裹（需要connect）组件。
            一般在app的顶层使用，这样整个应用的组件都在其中。

### redux中使用的api有：
    --createStore()：创建一个 Redux store 用来存储所有的state 应用中应有且只有一个store
    --combineReducers()：合并多个不同reducer 函数作为value的对象，合并为最终的reducer函数
    --applyMiddleware()：使用包含自定义功能的middleware 来拓展Redux

### redux-thunk
    1.	redux默认是不能进行异步处理的, 
    2.	某些时候应用中需要在redux中执行异步任务(ajax, 定时器)
    安装：
    ```
    npm install --save redux-thunk      or
    yarn add --save redux-thunk
    ```
    --import thunk from
    

### redux-devtools-extension
    使用上redux调试工具，安装：
    ```
    npm install --save-dev redux-devtools-extension    or
    yarn add --save-dev redux-devtools-extension
    ```
    --import {composeWithDevTools} from

### nanoid
    生成唯一id号
    
