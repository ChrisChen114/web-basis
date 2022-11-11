// 1. 同步文件读取
// 2.异步文件读取
// 3. 简单文件读取
// 4. 流式文件读取

// 3. 简单文件读取
var fs = require("fs");
fs.readFile("hello3.txt",function(err,data){
    if(!err){
        console.log(data.toString());
    }else{
        console.log("出错了");
    }
});

// 4. 流式文件读取
var rs=fs.createReadStream("hello4.txt");
var ws = fs.createWriteStream("hello5.txt");
// 监听事件可以不用写
// rs.once("open",function(){
//     console.log("文件打开")
// });

// rs.once("close",function(){
//     console.log("可读流关闭了");
//     // 关闭可写流
//     // ws.end();
// });
// ws.once("open",function(){
//     console.log("w文件打开")
// });

// ws.once("close",function(){
//     console.log("w文件关闭")
// });
// 监听事件可以不用写

// rs.on("data",function(data){
//     // 写出去
//     ws.write(data);
// })

// pipe() 可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws);
