// 异步打开和写入
// 异步api没有任何async标识
// 异步方法不可能有返回值,即var fd=fs.open()
// 回调函数两个参数：
//      err 错误对象，
//      fd 文件的描述符

var fs=require("fs");
// 回调函数的代码后执行
fs.open("hello2.txt","w",function(err,fd){
    // 判断是否出错
    if(!err){
        // 存在
        console.log(arguments);
        // 如果没有出错，则对文件进行写入操作
        fs.write(fd,"这是异步写入文件",function(err,fd){
            if(!err){
                console.log("写入陈公公");
                // 关闭文件
                fs.close(fd,function(err){
                    if(!err){
                        console.log("关闭")
                    }else{
                        console.log("关闭失败")
                    }
                
                });
            }else{
                console.log("写入失败")
            }
        });
    }else{
        console.log(err)
    }

});

