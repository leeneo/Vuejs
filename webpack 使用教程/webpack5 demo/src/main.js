// 使用 CommonJS 的模块化规范
const {
    add,
    mul
} = require('./js/mathUtils.js');

console.log(add(20, 30));
console.log(mul(20, 30));

// 使用 ES6 的模块化规范
import {
    name,
    age,
    height
} from './js/info.js';

console.log(name, age, height);

// 请求依赖的 CSS 文件
require('./css/normal.css');

// 请求依赖的 Less 文件
require('./css/special.less');

import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App.vue'

const app=new Vue({
    el:"#app",
    template: `<App/>`,
    components:{
        App
    }
})

