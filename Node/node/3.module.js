/*
引入其他的模块：
    在node中，通过require()函数来引入外部的模块
        require()可以传递一个文件的路径作为参数，node将会自动根据该
        路径来引入外部模块
        这里路径，如果使用相对路径，必须以.或..开头
    
    使用require()引入模块后，该函数会返回一个对象，这个对象代表的是引入的模块
*/ 
// 文件模块，
var md = require("./2.module");
var mathtest = require("./4.math")

// 核心模块fs
var fs=require("fs");
console.log(fs);

console.log(md);//{ x: 10 }
console.log(mathtest.add(3,4));
console.log(mathtest.mul(3,4));

