// 匿名闭包A
// 闭包A 声明了 flag 和 sum 函数
;(function(){
    var flag = true;

    if (flag) {
        document.getElementById('acont').innerHTML = 'acont';
    }

    function sum(a, b) {
        console.log(a + b);
    }

})();
