"use strict";

var _info = require("./info");

//使用 CommonJS 的模块化规范
var _require = require('./mathUtils.js'),
    add = _require.add,
    mul = _require.mul;

console.log(add(20, 30));
console.log(mul(20, 30)); //使用 ES6 的模块化规范

console.log(_info.name, _info.age, _info.height);