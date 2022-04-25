// 定义函数的几种方式

// 1.使用 function 直接定义
const lfn = function () {

}

// 2.对象的字面量中定义函数
const obj = {
  aaa: function () {

  }, //==>等价于
  bbb() {

  }
}

// 3.ES6箭头函数
// 无参
const nopfn = () => {

}
// 多参
const rfn = (pa, pb) => {
  return pa + pb;
}
// 单参，可省略()
const spfn = pa => {
  return pa * 2;
}
// 内部单行代码，执行该行代码，并将结果返回
const sfn = (pa, pb) => pa + pb
console.log(sfn(4, 5));

const clsfn = () => console.log('无参的单行代码演示');
clsfn();


// 箭头函数的使用

// setTimeout(function () {
//     console.log('定时器');
// },200)
setTimeout(() => {
  console.log('es6定时器');
}, 200)



// 箭头函数的this 指向，箭头函数没有自己的this，它指向的是他的外一层，即父级的this
// 普通函数的this: 指向它的调用者,如果没有调用者则默认指向window.
// 箭头函数的this: 指向箭头函数定义时所处的对象,而不是箭头函数使用时所在的对象,默认使用父级的this
const objTest = {
  names: {},
  outFn() {
    setTimeout(function () {
      console.log('this: ', this); //指向的是 window(浏览器)或Timeout对象(node)

      setTimeout(function () {
        console.log('aa: this: ', this); //指向的是 window(浏览器)或Timeout对象(node)
      }, 200)
      setTimeout(() => {
        console.log('aa：箭头函数的this: ', this); //指向的是 window(浏览器)或Timeout对象(node)
      }, 200)
    }, 200)

    setTimeout(() => {
      console.log('箭头函数的this: ', this); //指向的是 objTest 对象

      setTimeout(function () {
        console.log('bb: this: ', this); //指向的是 window(浏览器)或Timeout对象(node)
      }, 200)
      setTimeout(() => {
        console.log('bb：箭头函数的this: ', this); //指向的是 objTest 对象
      }, 200)

    }, 200)
    // console.log(this);
  }
}
objTest.outFn();
// console.log(this);
