### React路由
1.安装react-router-dom路由库，
    ```
    yarn add react-router-dom
    ```
2. 导航区、展示区在哪--单页面多组件
    在component文件夹里新建，Home，About文件夹和文件.jsx

3. 编写路由链接和注册路由
    index.js里<BrowserRouter><App/></BrowserRouter>
    App.js里编写路由链接和注册路由，使用到
        import {Link,Route,Routes} from 'react-router-dom'
4. index.js里
    包一个<HashRouter>或 <BrowserRouter>

