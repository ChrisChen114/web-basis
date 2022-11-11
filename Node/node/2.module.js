/* 
    模块化
        -方便代码管理和维护
        -在Node中，一个js文件就是一个模块
        -在Node中，每一个js文件中的js代码都是独立运行在一个函数中,
            而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
*/ 
console.log("output module")

// var x=10;
// var y=11;

// 向外部暴露属性或方法
exports.x=10;
exports.fn=function(){
    console.log("输出函数")
};