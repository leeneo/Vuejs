import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// 安装插件
Vue.use(VueRouter)

// 路由懒加载
const Test = () => import('../views/Test.vue');
const Home = () => import('../views/Home.vue');
const HomeNews = () => import('../views/HomeNews.vue');
const HomeMessages = () => import('../views/HomeMessages.vue');

const About = () => import( /* webpackChunkName: "about" */ '../views/About.vue');
const User = () => import('../views/User.vue');
const Profile = () => import('../views/Profile.vue');

// 配置url和组件间的映射关系
const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '/',
      //   redirect: 'news'
      // }, 
      {
        path: 'news',
        component: HomeNews
      }, {
        path: 'views',
        component: HomeMessages
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '简介'
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      title: '测试'
    }
  }
]

// 创建 vue router 对象
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  // console.log(to);
  next();
})

// 全局后置钩子
router.afterEach((to, from, next) => {
  // console.log('全局后置钩子');
})

export default router