### redux mini版

1. 安装redux
    ```
    yarn add redux
    ```

    使用configureStore，其在@reduxjs/toolkit里面，
        @reduxjs/toolkit 依赖了redux、redux-thunk，所以使用toolkit就不需要额外下载redux，意味着可以再多个框架使用，但是并没有react-redux，所以仍然需要安装react-redux。依赖了redux-thunk，提供了createAsyncThunk方法，可以支持异步.
    ```
    yarn add react-redux @reduxjs/toolkit
    ```

    参考的链接：
    https://www.yht7.com/news/214201

    http://t.zoukankan.com/zjhblogs-p-13533143.html

