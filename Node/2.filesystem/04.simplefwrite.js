// 简单文件写入
var fs = require("fs");

// 简单文件写入 - 异步
// ,{flag:"r"}  options一般不写；w的特点是全部覆盖
// 常用的flag = r w a 
fs.writeFile("C:\\Users\\Qianfu\\Desktop\\hello3.txt","这是通过简单方式写入",{flag:"a"},function(err){
    if(!err){
        console.log("写入成功");
    }else{
        console.log("写入失败");
    }

});