import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,

  // render 函数的作用
  // render: function createEl(createEl) {

  //   // 传入普通对象
  //   return createEl('h2', {
  //     class: 'box'
  //   }, ['这是用render 函数生成的', createEl('span', '，这是span 子元素')]);
  // }, //==>等价于
  // render: createEl => createEl('h2', {
  //   class: 'box'
  // }, ['这是用render 函数生成的', createEl('span', '，这是span 子元素')]),

  // 传入组件对象
  render: createEl => createEl(App)
  //   render: h => h(App)

}).$mount('#app')

// new Vue({
//   // el:'#app', 等价于==>.$mount('#app')
//   router,
//   render: h => h(App)
// }).$mount('#app')