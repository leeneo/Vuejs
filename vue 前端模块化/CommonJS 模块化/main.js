                // module.exports= function(){}
                let fnFoo = require("./js/fnFoo.js");
                console.log('函数形式: ', fnFoo);
                fnFoo('函数形式调用', 'Hi');

                // module.exports={}
                let objFoo = require("./js/moduleFoo.js");
                console.log('对象形式: ', objFoo);
                objFoo.stringLog('对象形式调用', 'Hi'); // log 函数
