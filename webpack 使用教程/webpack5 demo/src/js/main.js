// 使用 CommonJS 的模块化规范
const {
    add,
    mul
} = require('./mathUtils.js');

console.log(add(20, 30));
console.log(mul(20, 30));

// 使用 ES6 的模块化规范
import {
    name,
    age,
    height
} from './info.js';

console.log(name, age, height);

// 请求依赖的 CSS 文件
require('../css/normal.css');

// 请求依赖的 Less 文件
require('../css/special.less');
