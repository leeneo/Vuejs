import axios from 'axios'

// 回调，多参
// export function request(config, success, failure) {
//     // 创建 axios 的实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })

//     // 发送真正的网络请求，本身不处理结果，而将结果回调给 使用者
//     instance(config)
//         .then(res => {
//             // console.log('request: ',res);
//             success(res)
//         }).catch(err => {
//             // console.log('request: ',err);
//             failure(err)
//         })
// }

// 回调，单参
// export function request(config) {
//     // 创建 axios 的实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })

//     // 发送真正的网络请求，本身不处理结果，而将结果回调给 使用者
//     instance(config.baseConfig)
//         .then(res => {
//             config.success(res)
//         }).catch(err => {
//             config.failure(err)
//         })
// }

// promise 方式，原理
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         // 创建 axios 的实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })

//         // 发送真正的网络请求，本身不处理结果，而将结果回调给 使用者
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             }).catch(err => {
//                 reject(err)
//             })
//     })
// }

// promise 简化
export function request(config) {
    // 创建 axios 的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 发送真正的网络请求，本身不处理结果，而将结果回调给 使用者
    return instance(config)
}