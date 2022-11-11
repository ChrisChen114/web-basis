module.exports.name = "farew";
exports.age = 18;
exports.sayName = function(){
    console.log("我是Chris");
};

var hello = require("./hello");

hello.sayName();

/*
    exports 和module.exports的区别
        - 通过exports只能使用.的方式来向外暴露内部变量
            exports.xxx = xxx
        - 而module.exports既可以通过.的形式，也可以直接赋值
            module.exports.xxx = xxx
            module.exports = {}
*/