// 匿名闭包B
// 闭包B 无法使用 闭包A 声明的flag
;(function () {

    if (!flag) {
        document.getElementById('bcont').innerHTML = 'bcont';
    }

})();