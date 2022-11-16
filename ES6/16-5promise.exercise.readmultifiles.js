/*
    需求：依次读取f1,f2, and f3,then merge them to a new file f4
*/


// 引入 fs 模块
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

// 使用普通方式完成
// fs.readFile('16-5promise_readfilecontent_f1.md', (err, data1) => {
//     fs.readFile('16-5promise_readfilecontent_f2.md', (err, data2) => {
//         fs.readFile('16-5promise_readfilecontent_f3.md', (err, data3) => {
//             let result = data1 + '\r\n' + data2 + '\r\n' + data3;
//             console.log(result)
//         });
//     });
// });

// 使用 Promise 实现
const p = new Promise((resolve, reject) => {
    fs.readFile('16-5promise_readfilecontent_f1.md', (err, data) => {
        resolve(data);
    });
});

p.then(value => {
    // 此时value的值是 f1里面的内容
    // console.log(value.toString())

    // new Promise,用于下一个 then
    return new Promise((resolve, reject) => {
        fs.readFile('16-5promise_readfilecontent_f2.md', (err, data) => {
            resolve([value, data]);
        });
    });

}).then(value => {
    // 此时value的值是 f1+f2里面的内容
    // console.log(value.toString());

    // new Promise,用于再下一个 then
    return new Promise((resolve, reject) => {
        fs.readFile('16-5promise_readfilecontent_f3.md', (err, data) => {
            value.push(data);
            resolve(value);
        });
    });
}).then(value => {
    // 写出保存文件
    // 此时value的值是 f1+f2+f3里面的内容
    console.log(value.toString());
    // 做一个数组的拼接,使用join, value.join('\r\n')
    fs.writeFile('16-5promise_readfilecontent_f123.md', value.join('\r\n'),{flag:"w"}, error => {
        if(!error){
            console.log("写入成功");
        }else{
            console.log("写入失败");
        }
    });
});




