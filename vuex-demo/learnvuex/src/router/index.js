import Vue from 'vue'
import Router from 'vue-router'

const HelloVuex = () => import('@/components/HelloVuex');

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloVuex',
    component: HelloVuex
  }]
})
