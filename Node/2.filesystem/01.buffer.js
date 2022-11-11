// buffer 缓冲区
// buffer的结构和数组很像，操作的方法也和数组相似
// 数组中不能存储二进制的文件，而buffer就是专门用来存储二进制数据
// 使用buffer不需要引入模块，直接使用即可
// 在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
//      buffer中每一个元素的范围是从00 - ff （十六进制）  =>>十进制 0 - 255
// buffer中的一个元素，占用内存的一个字节

var str="atguigu";
var buf = Buffer.from(str); 
console.log(buf);  //输出 <Buffer 61 74 67 75 69 67 75>
console.log(buf.length);  // 输出   7  ==>>占用内存的大小
console.log(str.length);  // 输出   7  ==>>字符串的长度


// 注意以下的区别
var str="atguigu尚硅谷";
var buf = Buffer.from(str); 
console.log(buf);  //输出 <Buffer 61 74 67 75 69 67 75 e5 b0 9a e7 a1 85 e8 b0 b7>
console.log(buf.length);  // 输出   16  ==>>占用内存的大小  --一个汉字占用3个字节
console.log(str.length);  // 输出   10  ==>>字符串的长度


// 创建一个指定大小的buffer
var buf2 = new Buffer.alloc(10);
// 数字，字符串，对象都可以
buf2 = [1,2,3,'aa',{name:'孙悟空'},0xaa];
// buf2 = (1,2,3);  这个什么意思
console.log(buf2);
console.log(buf2[3]);// aa
console.log(buf2[5].toString(16));//以十六进制输出   aa
console.log(buf2[2]);// 只要数字在控制台或页面中输出都是以十进制

for(var i=0;i<buf2.length;i++){
    console.log(buf2[i]);
    /*
        注意输出
        1
        2
        3
        aa
        { name: '孙悟空' }
        170
    */ 
}

// Buffer.allocUnsafe() 创建一个指定大小的buffer，但是buffer中可能含有敏感数据
// 分配空间，不清除数据，可能会读取到敏感数据，如密码等
var buf3 = Buffer.allocUnsafe(10);
console.log(buf3);