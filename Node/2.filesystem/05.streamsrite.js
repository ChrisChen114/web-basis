// 流式文件写入
// 同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
// 

var fs = require("fs");

// 流式文件写入
// 创建一个可写流
var ws = fs.createWriteStream("hello4.txt");
// 可以通过监听流的open和close时间来监听流的打开和关闭
// ws.on("open",function(){  //一直在监听，浪费
ws.once("open",function(){//一次性的事件，触发一次后即失效
    console.log("流打开了");
});

ws.once("close",function(){//一次性的事件，触发一次后即失效
    console.log("流关闭了");
});

// 通过ws向文件中输出内容
ws.write("gajhi0re");
ws.write("gajhi0re");
ws.write("gajhi0re");
ws.write("gajhi0re");

// 关闭流
ws.end();