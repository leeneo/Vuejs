import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import toast from "components/common/toast";
import FastClick from 'fastclick'
import VueLazyload  from 'vue-lazyload'

Vue.config.productionTip = false;

// 创建事件总线
Vue.prototype.$bus = new Vue();

// 安装toast 插件
Vue.use(toast);

// npm i postcss-px-to-viewport -D  px转vw
// npm i postcss postcss-pxtorem -D px转rem
// 使用图片懒加载功能
// 安装 npm i vue-lazyload -S
// 使用方式1
// Vue.use(VueLazyload);

// 使用方式2，with options
const _loadimage = require('assets/img/common/placeholder.png')
// const _errorimage = require('./assets/error.gif')
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: _errorimage,
  loading: _loadimage,
  attempt: 1
})

// 解决移动端click事件的300ms延迟问题
// 安装 npm i fastclick -S
FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
