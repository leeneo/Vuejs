// 匿名闭包C
// 闭包C 无法使用 闭包A的sum函数
// 如何解决 js 匿名闭包的无法复用
// 答案：模块化
(function (n1, n2) {
    // console.log(n1 + n2);
    sum(n1, n2);
})(1, 2);