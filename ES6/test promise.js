        // 什么情况下会用到Promise?
        // 一般情况下，有异步操作时，使用Promise对这个异步操作进行封装
        // new 一个 promise 对象时，需要传入两个参数， resolve(成功时操作),reject(失败时操作)
        // Promise 有三个状态：等待中(pending)，完成(fullfilled)，失败(rejected)
        // 一旦执行 resolve, promise 变为 fullfilled 状态
        // 一旦执行 reject, promise 变为 rejected 状态

        console.log('Promise 的基本使用----------------------------------------------');
        // Promise 基本用法
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('成功操作'); //promise对象变为 fullfilled 状态，进入 then 回调
                // reject('失败操作'); //promise对象变为 rejected 状态，进入 catch 回调
            }, 1000)
        }).then((data) => {
            console.log('执行结果 then: ', data);
        }).catch((data) => {
            console.log('执行结果 catch: ', data);
        })

        // Promise 另一种使用方法 
        new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve('成功操作2'); //promise对象变为 fullfilled 状态，进入 then 回调
                reject('失败操作2'); //promise对象变为 rejected 状态，进入 catch 回调
            }, 1000)
        }).then(data => {
            console.log('执行结果2: ', data);
        }, err => {
            console.log('执行结果2: ', err);
        })
