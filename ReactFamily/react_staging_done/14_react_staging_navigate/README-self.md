### Redirect的使用（此处没有用）,是被Navigate替代了
### Navigate的使用
    1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Navigate指定的路由
    2.具体编写
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Navigate to="home" />}/>
        </Routes>
