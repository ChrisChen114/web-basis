## react-redux的使用
        1. 一个react插件库
        2. 专门用来简化react应用中使用redux

1. 容器组件如何写？
```
yarn add react-redux
```

### 总结
(1) 明确两个概念：
        1） UI组件：不能使用任何redux的api，只负责页面的呈现、交互等
        2） 容器组件：负责和redux通信，将结果交给UI组件
(2) 如何创建一个容器组件--靠react-redux的connect函数
        connect(mapStateToProps,mapDispatchToProps)(CountUI)
        mapStateToProps：映射状态，返回值是一个对象
        mapDispatchToProps：映射操作状态的方法，返回值是一个对象
(3) 备注：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
        在App组件中，
                {/* 给容器组件传递store */}
		<Count store={store}/>
