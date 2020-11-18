// B 程序员写的js:b
// 这时B程序员定义了一个全局的同名变量 flag
var moduleB = (function () {
    var obj = {};
    var flag = false;

    if (!flag) {
        document.getElementById('bcont').innerHTML = 'bcont';
    }
    obj.flag = flag;
    console.log('moduleB:', obj);
    return obj;
})();