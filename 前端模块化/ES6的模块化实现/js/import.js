// 导入变量和函数
import {
    flag,
    sum
} from './export.js';

if (flag) {
    document.getElementById('ccont').innerHTML = 'import-content';
}
console.log('ccc', sum(4, 4));

// 导入类
import {
    Person
} from './export.js';

var name = 'ccc';
var age = 28;
let p = new Person(name, age);
p.learning();

// 导入 default 数据
import addr from './export.js';
// console.log(addr);
addr('您好');

// 通配符(*) 导入所有暴露的数据，且指定别名
import * as info from './export.js';
console.log('*:', info.flag);
console.log('*:', info.height);
console.log('*:', info.mul(10, 10));
let hany=new info.Person('neo',29);
console.log('*:', hany.name,hany.age);
hany.learning()
