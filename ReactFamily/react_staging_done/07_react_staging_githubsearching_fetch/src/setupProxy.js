// 不能用ES6的写法，要用CJS（common JS）
// react18里面的写法
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        //跨域1
        createProxyMiddleware('/api1', { // 当发起以 /api1 为前缀的请求时，触发该代理
            target: 'http://localhost:5000', /* 要转发的地址 */
            //为true时，Host为 服务端ip和端口，false为请求方ip和端口
            //服务器接收的 Host 字段的值。(是否欺骗服务器请求来源。默认false)
            changeOrigin: true, 
            // 将 /api1 前缀置为空
            pathRewrite: {'^/api1': ''}
        }),
        //跨域2
        createProxyMiddleware('/api2', { // 当发起以 /api1 为前缀的请求时，触发该代理
            target: 'http://localhost:5001', /* 要转发的地址 */
            //为true时，Host为 服务端ip和端口，false为请求方ip和端口
            //服务器接收的 Host 字段的值。(是否欺骗服务器请求来源。默认false)
            changeOrigin: true, 
            // 将 /api1 前缀置为空
            pathRewrite: {'^/api2': ''}
        }),
    )
}