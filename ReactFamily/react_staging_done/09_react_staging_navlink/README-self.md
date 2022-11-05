### Switch组件的使用
    <Routes>
        <Switch>
        {/* Switch组件，只匹配一个，不在执行其他的 */}
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>
        </Switch>
    </Routes>

    补充：
        1. 通常情况下，path和component是一一对应的关系。
        2. Switch可以提高路由匹配效率（单一匹配）.

