### Github搜索案例
1.静态页面拆分
    bootstrap.css放在public/css目录下，直接拷贝过来；
    src/component下，新建List和Search文件夹；
    将提供的css，整个拷贝到List.css中；
    将静态的html，分解到List.jsx和Search.jsx中；改class成className，style改成style={{width:'100px'}}
    静态html页面里将只剩如下内容：
        <div className="container">
            <Search/>
            <List/>
        </div>
    List.jsx文件中，包含：
        <div className="row">  card...
    Search.jsx中包含：
        <section className="jumbotron">
    
    可能会出现如下warning：
        <a href="https://github.com/reactjs" target="_blank">
        改成如下，
        <a rel='noreferrer' href="https://github.com/reactjs" target="_blank">
    可能还会出现img有关的warning，
        <img  src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
        改成如下：
        <img alt='head_portrait' src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
    
2.    连续结构赋值
        //结构赋值，如下
        //const {keyWordElement}=this;
        // 连续结构赋值呢，如下，keyWordElement在提取赋值给value等
        // keyWordElement这个人没有定义，只是临时用，提取赋值给value等
        const {keyWordElement:{value}}=this;
        //这种写法只能获取一个结构赋值的值，如下
        // const {value}=this.keyWordElement.value;
        // 如果不喜欢value这个名字，可以改名字-重命名，写法如下
        // const {keyWordElement:{value:data}}=this;

3. 解决连续请求可能被阻止的问题
    使用D:\BaiduNetdiskDownload\React\react全家桶资料\05_所需服务器\server\server下的，然后 npm start
    然后在Search里面配置url地址；

4. 数据如何展示？
    在App里新建函数saveUsers，传递到Search里，Search里回调后返回App；
    App将数据传递List进行展示；
    List里使用users.map进行逐条展示；

5. 收尾工作：
    a. 首次打开页面时的欢迎信息
    b. 搜索时的loading
    c. 返回的数据展示
    d. 出错时的提示
    针对上述问题，
    在App里，将saveUsers改为更通用的updateAppState函数
    在Search里根据情况，将上述4种信息进行不同情况的更新
    List里书写三元表达式
    err那里，error => {
        // 这里有一个雷：err那里不要存错误对象，要存错误对象身上的一个属性

补充：兄弟组件间的通信：消息订阅-发布机制
    PubSubJS

    
    