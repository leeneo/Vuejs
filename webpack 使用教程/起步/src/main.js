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
} from './js/info';

console.log(name, age, height);

// 请求依赖的 CSS 文件
require('./css/normal.css');

// 请求依赖的 Less 文件
require('./css/special.less');

// 使用 vue 开发
import Vue from 'vue';
// 以 .js 方式引入入自定义的 vue 组件 
// import App from './vue/app';
// 以 .vue 方式引入入自定义的 vue 组件 
import App from './vue/App.vue';

new Vue({
    // el and template 同时出现时，template 内容会将 el 内容整个替换掉
    el: '#app',
    template: `<App></App>`,
    components: {
        App
    }
});