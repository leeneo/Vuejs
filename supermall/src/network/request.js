import axios from 'axios'

// promise 简化
export function request(config) {
    // 1.创建 axios 的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 2.设置拦截器
    // 设置请求拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })
    // 设置请求拦截器
    instance.interceptors.response.use(result => {
        return result.data
    }, err => {
        console.log(err);
    })

    // 3.发送真正的网络请求，本身不处理结果，而将结果回调给 使用者
    return instance(config)
}