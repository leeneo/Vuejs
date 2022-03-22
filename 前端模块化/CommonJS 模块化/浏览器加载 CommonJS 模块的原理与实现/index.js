        // module.exports= function(){}
        require.register("./js/foo.js", function (module, exports, require) {
            module.exports = function stringLog(x, y) {
                console.log(x, y);
            };
        });
        let fnFoo = require("./js/foo.js");
        console.log('函数形式: ', fnFoo);
        fnFoo('函数形式调用', 'Hi');

        // module.exports={}
        require.register("./js/foo.js", function (module, exports, require) {
            function stringLog(x, y) {
                console.log(x, y);
            };
            module.exports = {
                stringLog: stringLog
            }
        });

        let objFoo = require("./js/foo.js");
        console.log('对象形式: ', objFoo);
        objFoo.stringLog('对象形式调用', 'Hi');  // log 函数
