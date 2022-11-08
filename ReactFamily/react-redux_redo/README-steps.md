### react-redux开发步骤

### S1,新建工程
    ```
    create-react-app react-redux_redo
    ```
    精简不必要的文件
### S2, 新建容器文件夹和文件，添加Count组件和Person组件
    新建containers文件夹，
    在此新建Count文件夹和Count.jsx容器组件，在此新建Person文件夹和Person.jsx容器组件.
    要求：静态的，显示初步样子

### S3,安装react-redux，redux-thunk,nanoid, redux-devtools-extension
    安装redux，要记得安装（编写过程中曾忘记***）
    ```
    yarn add redux
    ```
    安装react-redux，用于实现状态管理
    ```
    yarn add react-redux
    ```
    安装redux-thunk，用于实现redux异步编程
    ```
    npm install --save redux-thunk               or
    yarn add redux-thunk       ==>>使用的这个
    ```
    安装nanoid，用于生成唯一的id识别号
    ```
    yarn add nanoid
    ```
    安装redux-devtools-extension，用于redux开发调试
    1.安装chrome浏览器插件,Redux DevTools
    2.下载工具依赖包
    ```
    npm install --save-dev redux-devtools-extension             or
    yarn add redux-devtools-extension             ==>>使用的这个
    ```
### S3,新建redux文件夹和文件
    在redux中，新建actions文件夹和reducers文件夹；
    在actions文件夹中，新建count.js和person.js，生成action对象，提供给containers使用
    在reducers文件夹中，新建index.js、count.js和person.js，为组件服务的reducer，提供给store.js使用，其中index.js用于合并所有的reducers，提供一个总的reducer
    在redux中，新建store.js，该文件专门用于暴露一个store对象，整个应用只有一个store对象
    在redux中，新建constant.js，保存常量信息，提供给reducers和actions使用

### S4,开发Count容器组件有关的redux操作
    store.js
    Count/Count.jsx
    actions/count.js
    actions/index.js
    reducers/count.js
    constant.js


### S5,开发Person容器组件有关的redux操作
    store.js
    Person/Person.jsx
    actions/person.js
    actions/index.js
    reducers/person.js
    constant.js

### S6,Count和Person容器组件访问redux中对方的状态数据
    Count/Count.jsx
    Person/Person.js
    actions/index.js

### S7,代码优化和查漏不缺
    箭头函数的问题
    reducer 
        // ××××××××××××××××××××××××××××
        // 里面写成一个函数，而不是箭头函数
    action 还是作用域的问题，普通函数无法获取上下文的变量
        // ××××××××××××××××××××××××××××
        // 以下是错误写法
        // Cannot read properties of undefined (reading 'state')
        // 还是作用域的问题，普通函数无法获取上下文的变量
        // export function increment(data){
        //     this.state.dispatch({type:INCREMENT,data})
        // }
    constant
        // export const INCREMENT = 'increment' // 错误写法
        export const INCREMENT = 'increment'
    其他问题，不熟练