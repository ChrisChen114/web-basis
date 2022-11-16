
// 入口文件
// 起因是html里的script越写越大，因此需要拆分
// 模块引入
import * as m1 from './m1.js'
import * as m2 from './m2.js'
import * as m3 from './m3'
console.log(m1);
console.log(m2);
console.log(m3);


m1.teach();
m2.findJob();
m3.default.change();

// 修改背景颜色为粉色
import $ from 'jquery'; // 类似于CommonJS里的 const $ = require('jquery')
$('body').css('background','pink');

/*
    jquery如何改变网页的背景颜色？
        在jquery中，通过$获得网页body对象，
        使用css()方法改变网页的背景颜色属性background，
        便可改变网页背景颜色。下面小编举例讲解jquery如何改变网页的背景颜色。
*/ 