// B 程序员写的js:b
// 这时B程序员定义了一个全局的同名变量 flag
(function () {
    var flag = false;

    if (!flag) {
        document.getElementById('bcont').innerHTML = 'bcont';
    }
})();