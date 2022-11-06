### ant-design
  antd使用哪些项目，比如后台管理系统

###  高级配置#
    这个例子在实际开发中还有一些优化的空间，比如无法进行主题配置。

    此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 craco （一个对 create-react-app 进行自定义配置的社区解决方案）。

    现在我们安装 craco 并修改 package.json 里的 scripts 属性。
    ```
    yarn add @craco/craco
    ```
    /* package.json */
    "scripts": {
    -   "start": "react-scripts start",
    -   "build": "react-scripts build",
    -   "test": "react-scripts test",
    +   "start": "craco start",
    +   "build": "craco build",
    +   "test": "craco test",
    }
    然后在项目根目录创建一个 craco.config.js 用于修改默认配置。

    /* craco.config.js */
    module.exports = {
      // ...
    };


  ### 自定义主题
      按照 配置主题 的要求，自定义主题需要用到类似 less-loader 提供的 less 变量覆盖功能。我们可以引入 craco-less 来帮助加载 less 样式和修改变量。

      首先把 src/App.css 文件修改为 src/App.less，然后修改样式引用为 less 文件。

      /* src/App.js */
      - import './App.css';
      + import './App.less';
      /* src/App.less */
      - @import '~antd/dist/antd.css';
      + @import '~antd/dist/antd.less';
      
      然后安装 craco-less 并修改 craco.config.js 文件如下。

      ```
      yarn add craco-less
      ```

      const CracoLessPlugin = require('craco-less');
      module.exports = {
        plugins: [
          {
            plugin: CracoLessPlugin,
            options: {
              lessLoaderOptions: {
                lessOptions: {
                  modifyVars: { '@primary-color': '#1DA57A' },
                  javascriptEnabled: true,
                },
              },
            },
          },
        ],
      };