// fs 文件系统
// fs是核心模块，直接引入即可
// 同步和异步调用
// fs模块中所有的操作都有两种形式可供选择同步和异步
// 同步文件系统会阻塞程序的执行，也就是除非操作完毕，否则不会向下执行代码
// 异步文件系统不会阻塞程序的执行，而是在操作完成时，通过回调函数将结果返回。

const { formatWithOptions } = require('util');

// 文件的写入  1.打开文件，2.写入，3.关闭
var fs= require('fs');
// 打开
var fd=fs.openSync("hello.txt","w");
console.log(fd); // 输出一个数字
// 写入  encoding方式默认是utf-8
fs.writeSync(fd,"今天心情不错",20);//position=20表示写入的起始位置
// 关闭文件
fs.closeSync(fd);

