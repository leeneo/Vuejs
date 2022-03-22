function stringLog(x, y) {
    console.log(x, y);
};


module.exports = {

    // 函数写法1
    // stringLog: function(x, y) {
    //     console.log(x, y);
    // }

    // 函数写法2
    // stringLog: (x, y) => {
    //     console.log(x, y);
    // }

    // 函数写法3
    // stringLog(x, y) {
    //     console.log(x, y);
    // }

    // 函数写法4
    stringLog,
    name: 'objFoo'
}