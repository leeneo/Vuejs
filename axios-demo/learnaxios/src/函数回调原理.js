// 声明时的参数fna 与调用时传入的aaa 指向的是同一个内存地址，所以声明者内部可以将参数作为结果返回给调用者
// 但是函数的使用一般是调用时将实值作为参数传入声明的函数内部，由声明的函数内部执行相关处理
// 当传入的参数不是实值，而是一个函数时，其运作过程看起来就向一个反式传参调用过程
// 既然可以将实值也就是结果调用时传入声明函数内部，那为什么不可以反过来呢，这就是函数回调传值
// 回调就是将一个函数内部的结果集，传递给另外的函数的过程，只不过是通过参数的形式
// 这里能保证声明时和调用时传递的是同一个结果，是因为函数aaa和fna指向的是同一个内存地址,即fna = function aaa(){}

// function normalFn(params) {
//     console.log(params);
// }
// normalFn('this ia a result of normal Function');

function callbackFn(fna, fnb) {
    // result error 是这个函数获得的结果（通常是异步网络请求），但是这个结果是要传递给 aaa,bbb使用的    
    // 这里不处理结果，只是将结果返回
    // 真正起作用的是 aaa bbb这两个参数函数
    fna('callback function: result')
    fnb('callback function: error')
}

callbackFn(function aaa(res) {
    console.log(res);
}, function bbb(err) {
    console.log(err);
})