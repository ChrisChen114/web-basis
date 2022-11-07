### 多个组件共享数据


### 安装nanoid
        yarn add nanoid

### 求和案例_react-redux数据共享版
        （1）定义一个Person组件，和Count组件通过redux共享数据。
        （2）为Person组件编写：reducer、action，配置constant常量
        （3）重点：Person的reducer和Count的reducer要使用combineReducers进行合并，合并后的总状态是一个对象！！！
        （4）交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”。
