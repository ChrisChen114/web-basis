### 解决样式丢失的问题
1. 将bootstrap.css的目录修改，
    由 <link rel="stylesheet" href="./css/bootstrap.css"/>
    改为 <link rel="stylesheet" href="/css/bootstrap.css"/>
        这个意思就是到localhost:3000/css/bootstrap.css
    注意：修改的是‘.’

2. 由 <link rel="stylesheet" href="./css/bootstrap.css"/>
   改为 <link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css"/>
   这个 %PUBLIC_URL% 代表绝对路径
   注意：修改的是‘.’，为%PUBLIC_URL%。但是只适用于React脚手架。

3. 改路由模式
    由 <BrowserRouter> 
    改为    <HashRouter>，此改会生成#,然后忽略#后面的请求内容
    注意：修改的是‘路由模式’，但是一般还是用BrowserRouter，所以可以修改‘.’

简单总结即为：
    1. public/inex.html 中，引入样式时不写 ./ 写/ （常用）
    2. public/inex.html 中，引入样式时不写 ./ 写%PUBLIC_URL% （常用，但只适用于React脚手架）
    3. 使用HashRouter
    