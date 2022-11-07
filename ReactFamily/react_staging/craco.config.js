/* craco.config.js */
// 配置具体的修改规则
// orange -> #1DA57A
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'orange' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};