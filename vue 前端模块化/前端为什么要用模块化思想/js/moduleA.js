//A 程序员写的js:a
var moduleA = (function () {
    var obj = {};
    var flag = true;

    if (flag) {
        document.getElementById('acont').innerHTML = 'acont';
    }

    function sum(a, b) {
        console.log(a + b);
    }

    obj.flag = flag;
    obj.sum = sum;
    console.log('moduleA:', obj);

    return obj;
})();