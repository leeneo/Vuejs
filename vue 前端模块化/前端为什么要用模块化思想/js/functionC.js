// A 程序员写的js:c
// A 程序员想用之前 a.js 里面写的全局变量flag，但是这个变量被B程序员给改掉了
// c.js 的内容显示不出来，这时 bug 出来了，A 会去找 Bug,这里只有几行代码，所以它能很快发现 flag 被B程序员给改掉了
// 但是如果有几千甚至几万行代码呢？
// 如何解决 js 的设计之初的弊端：全局变量冲突的问题
// 答案：模块化
(function () {
    if (flag) {
        document.getElementById('ccont').innerHTML = 'c-cont';
    }
})();