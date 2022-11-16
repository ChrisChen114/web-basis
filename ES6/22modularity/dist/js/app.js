'use strict';

var _m = require('./m1.js');

var m1 = _interopRequireWildcard(_m);

var _m2 = require('./m2.js');

var m2 = _interopRequireWildcard(_m2);

var _m3 = require('./m3');

var m3 = _interopRequireWildcard(_m3);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(m1);
// 入口文件
// 起因是html里的script越写越大，因此需要拆分
// 模块引入

console.log(m2);
console.log(m3);

m1.teach();
m2.findJob();
m3.default.change();

// 修改背景颜色为粉色
// 类似于CommonJS里的 const $ = require('jquery')
(0, _jquery2.default)('body').css('background', 'pink');

/*
    jquery如何改变网页的背景颜色？
        在jquery中，通过$获得网页body对象，
        使用css()方法改变网页的背景颜色属性background，
        便可改变网页背景颜色。下面小编举例讲解jquery如何改变网页的背景颜色。
*/