###
1. 安装axios，这是一种ajax库
2. 讲axios的使用，讲的是代理
    2.1 在chrome浏览器安装了FeHelper插件，用于展示json数据
    2.2 用到了..\react全家桶资料\06_其他\测试代理服务器\测试代理服务器\server1.js
    2.3 CORS跨域问题的解决，在server1.js里增加"proxy",
        "proxy":"http://localhost:5000"，意思是从3000端口发的请求给转发给port 5000
        这种写死的做法，不太灵活
    2.4 使用灵活的方式配置代理
        src目录下新建setupProxy.js，文件名固定，React会自动找
        具体写法参看文件，不用记

