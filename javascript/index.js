//这种是函数声明
function add(x,y){
    var z;
    z = x+y;
    return z;
}
console.log(add(1,2));

//函数表达式
var fun1 = function (x,y) {
    return x+y;
}
console.log(fun1(1,2));


//数组有关
// var arrayObj = new Array();
// var arrayObj1 = new Array(10);
// var arrayObj2 = new Array(2,4,"aa");
var arrayObj2 = [2,4,"aa",8];
console.log(arrayObj2[0])