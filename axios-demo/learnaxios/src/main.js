import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({

  render: h => h(App),
}).$mount('#app')

// 默认全局 config 配置
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 2000 //毫秒
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 使用全局的 axios 对象和对应的配置进行网络请求
// 最简单的方式
// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
// }).then(res=>{
//   console.log('最简单的: ',res);
// })

// axios({
//   url: '/home/multidata',
// }).then(res => {
//   console.log('使用全局配置的简单请求: ', res);
// })

// const config = {
//   url: 'http://123.207.32.32:8000/home/multidata',
//   // get 请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   },
//   method: 'get'
// }
// axios(config).then(res => {
//   console.log('config: ', res);
// })

// axios.get('/home/multidata?type=pop&page=1').then(res => {
//   console.log('get: ', res);
// });

// axios.post('/home/multidata', {
//   data: 'someData'
// }).then(res => {
//   console.log('post: ', res);
// })

// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   params: {
//     type: 'pop',
//     page: 1
//   }
//   // axios.spread 可以将数组展开
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// axios.spread 类似于数组的解构
// const names = ['aa', 'bb', 'cc']
// const [name1, name2] = names;
// console.log(name1, name2);  // aa bb

// 使用单独的配置进行网络请求，需要创建 axios 实例对象
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// });

// instance1({
//   url: '/home/data',
// }).then(res => {
//   console.log('实例请求：',res);
// })

// instance1({
//   url: '/home/multidata',
//   params:{
//     type:'sell',
//     page:4
//   }
// }).then(res => {
//   console.log('实例请求，带参：',res);
// })


// 封装的request 网络请求模块的使用
import {
  request
} from './network/request'

// 回调方式，对应request 多参： config:{url:''},res,err
// request({
//   url:'/home/multidata'
// }, res => {
//   console.log('main-来自request的回调: ',res);
// }, err => {
//   console.log('main-来自request的回调: ',err);
// })

// 回调方式 对应request 单参：config:{baseConfig,success,failure} ；将success failure 封装进config。
// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success: res => {
//     console.log('main-来自request的回调: ', res);
//   },
//   failure: err => {
//     console.log('main-来自request的回调: ', err);
//   }
// })

// promise 方式
request({
  url:'/home/multidata'
}).then(res=>{
    console.log('main-promise: ', res);
}).catch(err=>{
    console.log('main-promise: ', err);
})