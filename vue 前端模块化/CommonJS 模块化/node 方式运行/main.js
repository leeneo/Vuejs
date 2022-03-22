                // 运行：node main.js

                // module.exports= function(){}
                let fnFoo = require("./js/fnFoo.js");
                console.log('函数形式: ', fnFoo);
                fnFoo('函数形式调用', 'Hi');

                // module.exports={}
                let objFoo = require("./js/objFoo.js");
                console.log('对象形式: ', objFoo);
                objFoo.stringLog('对象形式调用', objFoo.name); // log 函数


                let exObj = require("./js/exports.js");
                // console.log(exObj);
                console.log(exObj.flag);
                console.log(exObj.sum(3, 6));

                // 导入同时解构
                let {
                    flag,
                    sum
                } = require("./js/exports.js");
                console.log(flag);
                console.log(sum(3, 6));