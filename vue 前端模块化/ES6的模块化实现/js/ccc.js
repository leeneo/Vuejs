// 导入变量和函数
import {
    flag,
    sum
} from './aaa.js';

if (flag) {
    document.getElementById('ccont').innerHTML = 'c-cont';
}
console.log('ccc', sum(4, 4));

// 导入类
import {
    Person
} from './aaa.js';

var name = 'ccc';
var age = 28;
let p = new Person(name, age);
p.learning();

// 导入 default 数据
// import addr from './aaa.js';
// console.log(addr);

import say from './aaa.js';
say('您好');

// 通配符(*) 导入所有暴露的数据，且指定别名
import * as info from './aaa.js';
// console.log('*:', info.flag);
// console.log('*:', info.height);
// console.log('*:', info.mul(10, 10));