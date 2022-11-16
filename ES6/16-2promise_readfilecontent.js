// 1. 引入 fs 模块
const fs = require('fs');

// 2. 调用方法读取文件
// 参数：第一个是路径，第二个是回调函数-包括err是错误对象和data是读取的结果（是一个buffer）
// fs.readFile('16-2promise_readfilecontent_weixue.md',(err,data)=>{
//     // 如果失败，则抛出错误
//     if(err) throw err;
//     // 如果没有出错，则输出内容
//     // console.log(data); //直接这样输出，打印的是buffer内容，看不懂，<Buffer 20 20 e4 b8 ba e5 ad a6 0d 0a 20 20
//     console.log(data.toString());
// });

// 3. 使用Promise 封装
const p = new Promise(function (resolve, reject) {
    fs.readFile('16-2promise_readfilecontent_weixue.md', (err, data) => {
        // 如果失败，则抛出错误
        if (err) reject(err);
        // 如果没有出错，则输出内容
        resolve(data);
    });
});

p.then(function (value) {
    // console.log(data); //直接这样输出，打印的是buffer内容，看不懂，<Buffer 20 20 e4 b8 ba e5 ad a6 0d 0a 20 20
    console.log(value.toString());
}, function (reason) {
    console.log(reason)
});

// 当有多个IO文件操作的时候，就体现出优势。单个文件操作，看不出明显效果

