### React路由组件与一般组件
1.路由组件和一般组件
    // Home和About是路由组件
    import Home from './pages/Home/Home'
    import About from './pages/About/About'
    // Header是一般组件
    import Header from './components/Header/Header'
    两者区别：
    路由组件会收到消息，如history，location，match

具体为：
    1. 写法不同
        一般组件：<Header/>
        路由组件（ES6写法）：<Route path='/about' element={<About/>}/>
    2. 存放位置不同：
        一般组件：components文件夹
        路由组件：pages文件夹
    3. 接收到的props不同：
        一般组件：写组件标签时传递了什么，就能收到什么
        路由组件：history...，location...，match...，接收到三个固定的属性
            history：go,goBack,goForward,push,replace
            location：pathname,search,state
            match：params,path,url


2. 使用NavLink进行高亮?未实现

3.对NavLink的封装
    1. NavLink可以实现路由链接的高亮（此处未实现），通过activeClassName指定样式名
    2. 标签体内容About会传递给children属性 
       标签体内容是一个特殊的标签属性
    3. 通过this.props.children可以获取标签体内容.
    

